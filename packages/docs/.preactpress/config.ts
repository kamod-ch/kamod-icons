import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@kamod-ch/preactpress/config";

const productionBase = "/kamod-icons/";
const isDev = process.argv.includes("dev");
const siteBase = isDev ? "/" : productionBase;
const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const faviconFiles = new Map([
  ["/favicon.svg", { file: "favicon.svg", type: "image/svg+xml" }],
  ["/favicon-32.png", { file: "favicon-32.png", type: "image/png" }],
  ["/favicon.png", { file: "favicon.png", type: "image/png" }],
]);

function publicUrl(path: string): string {
  return `${siteBase.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

export default defineConfig({
  theme: "./theme/Layout.tsx",
  rewrites: isDev
    ? {
        "/kamod-icons": "/",
        "/kamod-icons/": "/",
        "/kamod-icons/icons": "/icons",
        "/kamod-icons/icons/installation": "/icons/installation",
        "/kamod-icons/icons/usage": "/icons/usage",
        "/kamod-icons/icons/icon-sets": "/icons/icon-sets",
      }
    : undefined,
  site: {
    title: "Kamod Icons",
    description: "Icons that make Preact interfaces easier to understand.",
    url: "https://kamod-ch.github.io",
    base: siteBase,
  },
  markdown: {
    html: false,
    emoji: true,
  },
  vite: {
    plugins: [
      {
        name: "kamod-icons-favicon-dev",
        enforce: "pre",
        configureServer(server) {
          const serveKamodFavicon = (req, res, next) => {
            const pathname = req.url?.split("?")[0] ?? "";
            const favicon = faviconFiles.get(pathname);

            if (!favicon) {
              next();
              return;
            }

            void fs
              .readFile(path.join(docsRoot, "public", favicon.file))
              .then((body) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", favicon.type);
                res.setHeader("Cache-Control", "no-store, max-age=0");
                res.end(body);
              })
              .catch(() => next());
          };

          // PreactPress registers its own /favicon.* middleware. Put ours at the
          // very front so dev serves the project favicon, not PreactPress' default.
          const stack = server.middlewares.stack;
          if (Array.isArray(stack)) {
            stack.unshift({ route: "", handle: serveKamodFavicon });
          } else {
            server.middlewares.use(serveKamodFavicon);
          }
        },
      },
    ],
  },
  head: [
    ["link", { rel: "icon", href: publicUrl("favicon.svg"), type: "image/svg+xml" }],
    ["link", { rel: "icon", href: publicUrl("favicon-32.png"), type: "image/png", sizes: "32x32" }],
    ["link", { rel: "apple-touch-icon", href: publicUrl("favicon.png") }],
    ["link", { rel: "stylesheet", href: publicUrl("styles/logo.css") }],
    ["link", { rel: "stylesheet", href: publicUrl("styles/studio.css") }],
    ["link", { rel: "stylesheet", href: publicUrl("styles/icons-docs.css") }],
  ],
  themeConfig: {
    outline: true,
    search: false,
    lastUpdated: false,
    footer: "Built with PreactPress.",
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Browser", link: "/#icon-browser" },
          { text: "Install", link: "/icons/installation" },
          { text: "Usage", link: "/icons/usage" },
          { text: "Sets", link: "/icons/icon-sets" },
        ],
        socialLinks: [
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
            },
            link: "https://github.com/kamod-ch/kamod-icons",
            ariaLabel: "Kamod Icons on GitHub",
          },
        ],
        sidebar: [
          {
            text: "Kamod Icons",
            items: [
              { text: "Overview", link: "/" },
              { text: "Install", link: "/icons/installation" },
              { text: "Use icons", link: "/icons/usage" },
              { text: "Choose a set", link: "/icons/icon-sets" },
            ],
          },
        ],
      },
    },
  },
});
