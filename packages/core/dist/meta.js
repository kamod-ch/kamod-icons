// src/meta.ts
var iconSources = {
  "shadcn": {
    "label": "shadcn/ui",
    "exportPath": "@kamod-ch/icons/shadcn",
    "upstream": {
      "type": "npm",
      "package": "lucide-static",
      "versionPackage": "lucide",
      "version": "1.23.0",
      "repository": "https://github.com/lucide-icons/lucide",
      "license": "ISC",
      "note": "Lucide subset with legacy icon names used by shadcn/ui. There is no separate shadcn icons npm package."
    },
    "syncedAt": "2026-07-03",
    "iconCount": 877
  },
  "lucide": {
    "label": "Lucide",
    "exportPath": "@kamod-ch/icons/lucide",
    "upstream": {
      "type": "npm",
      "package": "lucide-static",
      "versionPackage": "lucide",
      "version": "1.23.0",
      "repository": "https://github.com/lucide-icons/lucide",
      "license": "ISC"
    },
    "syncedAt": "2026-07-03",
    "iconCount": 1994
  },
  "heroicons": {
    "label": "Heroicons",
    "exportPath": "@kamod-ch/icons/heroicons/{variant}",
    "variants": [
      "outline",
      "solid"
    ],
    "upstream": {
      "type": "npm",
      "package": "heroicons",
      "versionPackage": "@heroicons/react",
      "version": "2.2.0",
      "repository": "https://github.com/tailwindlabs/heroicons",
      "license": "MIT"
    },
    "syncedAt": "2026-07-03",
    "iconCount": 648
  },
  "tabler": {
    "label": "Tabler Icons",
    "exportPath": "@kamod-ch/icons/tabler/{variant}",
    "variants": [
      "outline",
      "filled"
    ],
    "upstream": {
      "type": "npm",
      "package": "@tabler/icons",
      "version": "3.44.0",
      "repository": "https://github.com/tabler/tabler-icons",
      "license": "MIT"
    },
    "syncedAt": "2026-07-03",
    "iconCount": 6146
  },
  "iconoir": {
    "label": "Iconoir",
    "exportPath": "@kamod-ch/icons/iconoir/{variant}",
    "variants": [
      "regular",
      "solid"
    ],
    "upstream": {
      "type": "npm",
      "package": "iconoir",
      "version": "7.11.1",
      "repository": "https://github.com/iconoir-icons/iconoir",
      "license": "MIT"
    },
    "syncedAt": "2026-07-03",
    "iconCount": 1671
  },
  "reicon": {
    "label": "Reicon",
    "exportPath": "@kamod-ch/icons/reicon/{variant}",
    "variants": [
      "outline",
      "filled"
    ],
    "upstream": {
      "type": "github",
      "package": "dqev/reicon",
      "version": "1.1.1",
      "repository": "https://github.com/dqev/reicon",
      "license": "MIT",
      "note": "SVG path data generated from data/icon-data.json in the Reicon repository."
    },
    "syncedAt": "2026-07-08",
    "iconCount": 5360
  }
};
export {
  iconSources
};
//# sourceMappingURL=meta.js.map