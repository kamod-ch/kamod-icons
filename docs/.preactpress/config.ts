import { defineConfig } from "@kamod-ch/preactpress/config";

export default defineConfig({
  theme: "./theme/Layout.tsx",
  site: {
    title: "Kamod Icons",
    description: "Icons that make Preact interfaces easier to understand.",
  },
  markdown: {
    html: false,
    emoji: true,
  },
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
        sidebar: [
          {
            text: "Kamod Icons",
            items: [
              { text: "Overview", link: "/" },
              { text: "Install", link: "/icons/installation" },
              { text: "Use icons", link: "/icons/usage" },
              { text: "Theme & style", link: "/icons/theming" },
              { text: "Accessibility", link: "/icons/accessibility" },
              { text: "Choose a set", link: "/icons/icon-sets" },
              { text: "Figma workflow", link: "/icons/figma-workflow" },
              { text: "Kamod UI integration", link: "/icons/kamod-ui" },
            ],
          },
        ],
      },
    },
  },
});
