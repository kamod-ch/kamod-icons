import { defineConfig } from "@kamod-ch/preactpress/config";

export default defineConfig({
  site: {
    title: "Kamod Icons",
    description:
      "A small, tree-shakeable Preact icon package for Kamod UI, PreactPress and modern Preact apps.",
  },
  markdown: {
    html: false,
    emoji: true,
  },
  themeConfig: {
    outline: true,
    search: true,
    lastUpdated: true,
    footer: "Built with PreactPress for Kamod.",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/kamod-ch",
        ariaLabel: "Kamod on GitHub",
      },
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Overview", link: "/icons/" },
          { text: "Installation", link: "/icons/installation" },
          { text: "Usage", link: "/icons/usage" },
        ],
        sidebar: [
          {
            text: "Kamod Icons",
            items: [
              { text: "Overview", link: "/icons/" },
              { text: "Installation", link: "/icons/installation" },
              { text: "Usage", link: "/icons/usage" },
              { text: "Icon Sets", link: "/icons/icon-sets" },
              { text: "Figma Workflow", link: "/icons/figma-workflow" },
              { text: "Accessibility", link: "/icons/accessibility" },
              { text: "Theming", link: "/icons/theming" },
              { text: "Kamod UI", link: "/icons/kamod-ui" },
            ],
          },
        ],
      },
    },
  },
});
