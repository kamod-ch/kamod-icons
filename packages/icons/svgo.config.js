/** @type {import('svgo').Config} */
export default {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIds: true,
          removeUnknownsAndDefaults: false,
          convertColors: false,
        },
      },
    },
    "removeDimensions",
    "removeXMLNS",
    "removeStyleElement",
    "removeScriptElement",
    {
      name: "removeAttrs",
      params: {
        attrs: ["data-name", "data-testid"],
      },
    },
  ],
};
