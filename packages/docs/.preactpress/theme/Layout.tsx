import type { FunctionalComponent } from "preact";
import {
  createMdxHeadingComponents,
  isActive,
  normalizeLink,
  slugifyHeading,
  toggleStoredTheme,
  withBase,
  type LayoutProps,
} from "@kamod-ch/preactpress/client";
import Logo from "./Logo.js";
import Footer from "./Footer.js";

type SidebarItem = {
  text: string;
  link?: string;
  items?: SidebarItem[];
  collapsed?: boolean;
};

type SidebarGroup = {
  text?: string;
  items: SidebarItem[];
  collapsed?: boolean;
};

type NavItem = NonNullable<LayoutProps["themeConfig"]["nav"]>[number];
type SocialLink = NonNullable<LayoutProps["themeConfig"]["socialLinks"]>[number];

function resolveSidebar(sidebar: LayoutProps["themeConfig"]["sidebar"], routePath: string): SidebarGroup[] {
  if (!sidebar) return [];
  if (Array.isArray(sidebar)) return sidebar as SidebarGroup[];

  const route = normalizeLink(routePath);
  const entries = Object.entries(sidebar)
    .map(([prefix, groups]) => ({ prefix: normalizeLink(prefix), groups: groups as SidebarGroup[] }))
    .sort((a, b) => b.prefix.length - a.prefix.length);

  return entries.find(({ prefix }) => route === prefix || route.startsWith(`${prefix}/`))?.groups ?? [];
}

function flattenItems(items: SidebarItem[]): Array<{ text: string; link: string }> {
  return items.flatMap((item) => [
    ...(item.link ? [{ text: item.text, link: item.link }] : []),
    ...(item.items ? flattenItems(item.items) : []),
  ]);
}

function flattenSidebar(groups: SidebarGroup[]): Array<{ text: string; link: string }> {
  return groups.flatMap((group) => flattenItems(group.items));
}

function tagRoute(tag: string) {
  return `/tags/${slugifyHeading(tag)}`;
}

function metaFlag(page: LayoutProps["page"], key: string) {
  return Boolean((page?.meta as Record<string, unknown> | undefined)?.[key]);
}

function isHomeLike(routePath: string, page: LayoutProps["page"], localePrefix?: string) {
  const route = normalizeLink(routePath);
  return (
    route === normalizeLink(localePrefix || "/") ||
    route === "/icons" ||
    route === "/icons/" ||
    metaFlag(page, "isHome") ||
    (page?.meta as Record<string, unknown> | undefined)?.layout === "home" ||
    (page?.meta as Record<string, unknown> | undefined)?.markdownStyles === false
  );
}

function renderSocial(link: SocialLink) {
  const label = link.ariaLabel ?? (typeof link.icon === "string" ? link.icon : "Social link");
  const svg = typeof link.icon === "object" ? link.icon.svg : undefined;
  return (
    <a class="kiw-social" href={link.link} aria-label={label} title={label}>
      {svg ? <span dangerouslySetInnerHTML={{ __html: svg }} /> : <span>{label.slice(0, 2)}</span>}
    </a>
  );
}

const SidebarTree: FunctionalComponent<{
  items: SidebarItem[];
  routePath: string;
  base: string;
}> = ({ items, routePath, base }) => (
  <ul class="kiw-sidebar-list">
    {items.map((item) => {
      const active = item.link ? isActive(routePath, item.link) : false;
      return (
        <li key={`${item.text}:${item.link ?? "group"}`}>
          {item.link ? (
            <a
              class={active ? "active" : ""}
              href={withBase(base, item.link)}
              aria-current={active ? "page" : undefined}
            >
              {item.text}
            </a>
          ) : (
            <span class="kiw-sidebar-label">{item.text}</span>
          )}
          {item.items?.length ? <SidebarTree items={item.items} routePath={routePath} base={base} /> : null}
        </li>
      );
    })}
  </ul>
);

const Layout: FunctionalComponent<LayoutProps> = ({
  site,
  themeConfig,
  routePath,
  page,
  locale,
  locales = [],
  localizeRoute,
}) => {
  const sidebar = resolveSidebar(themeConfig.sidebar, routePath);
  const flat = flattenSidebar(sidebar);
  const activeIndex = flat.findIndex((item) => isActive(routePath, item.link));
  const previous = activeIndex > 0 ? flat[activeIndex - 1] : undefined;
  const next = activeIndex >= 0 && activeIndex < flat.length - 1 ? flat[activeIndex + 1] : undefined;
  const isHome = isHomeLike(routePath, page, locale?.prefix);
  const MdxComponent = page?.kind === "mdx" ? page.Component : undefined;
  const mdxComponents = createMdxHeadingComponents({
    headingClass: "kiw-heading",
    anchorClass: "kiw-heading-anchor",
    anchorLabel: "Link to section",
  });
  const pageTags = page?.tags ?? [];
  const outline = themeConfig.outline === false || isHome ? [] : page?.headings ?? [];
  const editHref =
    themeConfig.editLink && page?.relativePath
      ? themeConfig.editLink.pattern.replace(/:path/g, page.relativePath)
      : undefined;
  const lastUpdated = page?.lastUpdated
    ? new Date(page.lastUpdated).toLocaleDateString(site.lang || "en", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : undefined;

  function closeMobileMenu(event: Event) {
    const link = event.currentTarget as HTMLAnchorElement;
    link.closest("details")?.removeAttribute("open");
  }

  const content = MdxComponent ? (
    <MdxComponent components={mdxComponents} />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: page?.kind === "markdown" ? page.html : "" }} />
  );

  return (
    <div class={`kiw-site${isHome ? " is-home" : ""}`}>
      <a class="kiw-skip" href="#content">Skip to content</a>

      <header class="kiw-header">
        <div class="kiw-header-inner">
          <a class="kiw-brand" href={withBase(site.base, locale?.prefix || "/")} aria-label={site.title}>
            <Logo label={site.title} base={site.base} />
          </a>

          <nav class="kiw-nav" aria-label="Main navigation">
            {(themeConfig.nav ?? []).map((item: NavItem) =>
              item.link ? (
                <a
                  key={item.link}
                  class={isActive(routePath, item.link) ? "active" : ""}
                  href={withBase(site.base, item.link)}
                  aria-current={isActive(routePath, item.link) ? "page" : undefined}
                >
                  {item.text}
                </a>
              ) : item.items?.length ? (
                <details class="kiw-nav-menu" key={item.text}>
                  <summary>{item.text}</summary>
                  <div>
                    {item.items.map((child) =>
                      child.link ? <a href={withBase(site.base, child.link)} key={child.link}>{child.text}</a> : null,
                    )}
                  </div>
                </details>
              ) : null,
            )}
          </nav>

          <div class="kiw-actions">
            {themeConfig.socialLinks?.map((link) => renderSocial(link))}
            {locales.length > 1 && localizeRoute ? (
              <details class="kiw-locale">
                <summary>{locale?.label ?? "Language"}</summary>
                <div>
                  {locales.map((item) => (
                    <a href={withBase(site.base, localizeRoute(item))} key={item.key}>{item.label}</a>
                  ))}
                </div>
              </details>
            ) : null}
            <button class="kiw-theme-toggle" type="button" onClick={toggleStoredTheme} aria-label="Toggle color theme">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="currentColor" d="M12 3a9 9 0 0 1 0 18V3z" />
                <path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 3a9 9 0 1 0 0 18" />
              </svg>
            </button>
            <details class="kiw-mobile-menu">
              <summary class="kiw-menu-button">Menu</summary>
              <div class="kiw-mobile-menu-panel">
                <nav aria-label="Mobile navigation">
                  {(themeConfig.nav ?? []).map((item: NavItem) =>
                    item.link ? (
                      <a
                        key={item.link}
                        class={isActive(routePath, item.link) ? "active" : ""}
                        href={withBase(site.base, item.link)}
                        aria-current={isActive(routePath, item.link) ? "page" : undefined}
                        onClick={closeMobileMenu}
                      >
                        {item.text}
                      </a>
                    ) : item.items?.length ? (
                      item.items.map((child) =>
                        child.link ? (
                          <a href={withBase(site.base, child.link)} key={child.link} onClick={closeMobileMenu}>
                            {child.text}
                          </a>
                        ) : null,
                      )
                    ) : null,
                  )}
                </nav>

              </div>
            </details>
          </div>
        </div>
      </header>

      <div class="kiw-shell">
        {!isHome ? (
          <aside class="kiw-sidebar" id="kiw-docs-menu" aria-label="Documentation navigation">
            <div class="kiw-panel">
              <a class="kiw-menu-close" href="#content" aria-label="Close documentation menu">
                ×
              </a>
              {sidebar.map((group, index) => (
                <section class="kiw-sidebar-group" key={`${group.text ?? "group"}:${index}`}>
                  {group.text ? <h2>{group.text}</h2> : null}
                  <SidebarTree items={group.items} routePath={routePath} base={site.base} />
                </section>
              ))}
            </div>
          </aside>
        ) : null}

        <main id="content" class={isHome ? "kiw-main kiw-main-home" : "kiw-main"}>
          {isHome ? (
            <div class="kiw-home-canvas">{content}</div>
          ) : (
            <article class="kiw-doc">
              <div class="kiw-doc-header">
                <p class="kiw-kicker">Documentation</p>
                <h1>{page?.title ?? site.title}</h1>
                {page?.description ? <p class="kiw-lead">{page.description}</p> : null}
                {themeConfig.tags !== false && pageTags.length ? (
                  <ul class="kiw-tags" aria-label="Tags">
                    {pageTags.map((tag) => (
                      <li key={tag}><a href={withBase(site.base, tagRoute(tag))}>{tag}</a></li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div class="kiw-content">{content}</div>

              {previous || next ? (
                <nav class="kiw-pager" aria-label="Page navigation">
                  {previous ? <a href={withBase(site.base, previous.link)}><span>Previous</span>{previous.text}</a> : <span />}
                  {next ? <a href={withBase(site.base, next.link)}><span>Next</span>{next.text}</a> : null}
                </nav>
              ) : null}

              {themeConfig.lastUpdated || editHref ? (
                <footer class="kiw-meta">
                  {themeConfig.lastUpdated && lastUpdated ? <span>Updated {lastUpdated}</span> : null}
                  {editHref ? <a href={editHref}>{themeConfig.editLink?.text ?? "Edit this page"}</a> : null}
                </footer>
              ) : null}
            </article>
          )}
        </main>

        {!isHome && outline.length ? (
          <aside class="kiw-outline" aria-label="On this page">
            <div class="kiw-panel">
              <h2>On this page</h2>
              <ul>
                {outline.map((heading) => (
                  <li class={`level-${heading.level}`} key={heading.id}>
                    <a href={`#${heading.id}`}>{heading.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        ) : null}
      </div>

      <Footer base={site.base} />
    </div>
  );
};

export default Layout;
