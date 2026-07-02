const communityItems = [
  {
    title: "Star on GitHub",
    description: "Support the project and stay close to releases, fixes, and new icon sets.",
    href: "https://github.com/kamod-ch/kamod-icons",
    cta: "View repository",
  },
  {
    title: "Spread the word",
    description: "Share Kamod Icons with your team when you want consistent Preact iconography.",
    href: "https://github.com/kamod-ch/kamod-icons",
    cta: "Share project",
  },
  {
    title: "Contribute",
    description: "Improve docs, sync upstream sets, or add icons through pull requests.",
    href: "https://github.com/kamod-ch/kamod-icons/blob/main/CONTRIBUTING.md",
    cta: "Start contributing",
  },
] as const;

export default function CommunitySection() {
  return (
    <section class="ki-community" aria-labelledby="community-title">
      <div class="ki-community-head">
        <h2 id="community-title">Support our work</h2>
        <p>
          Kamod Icons is an open-source project. If you find it useful, there are several ways to help it grow.
        </p>
      </div>
      <div class="ki-community-grid">
        {communityItems.map((item) => (
          <article class="ki-community-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
