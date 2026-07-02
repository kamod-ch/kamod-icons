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
    outline: false,
    search: false,
    lastUpdated: false,
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Icons", link: "/#icon-browser" },
          { text: "Docs", link: "/icons/installation" },
        ],
        sidebar: [
          {
            text: "Kamod Icons",
            items: [
              { text: "Overview", link: "/" },
              { text: "Installation", link: "/icons/installation" },
              { text: "Usage", link: "/icons/usage" },
              { text: "Theming", link: "/icons/theming" },
              { text: "Accessibility", link: "/icons/accessibility" },
              { text: "Icon sets", link: "/icons/icon-sets" },
              { text: "Figma workflow", link: "/icons/figma-workflow" },
              { text: "Kamod UI", link: "/icons/kamod-ui" },
            ],
          },
        ],
      },
    },
  },
});
