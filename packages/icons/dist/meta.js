// src/meta.ts
var iconSources = {
  "shadcn": {
    "label": "shadcn/ui",
    "exportPath": "@kamod/icons/shadcn",
    "upstream": {
      "type": "npm",
      "package": "lucide-static",
      "versionPackage": "lucide",
      "version": "1.22.0",
      "repository": "https://github.com/lucide-icons/lucide",
      "license": "ISC",
      "note": "Lucide subset with legacy icon names used by shadcn/ui. There is no separate shadcn icons npm package."
    },
    "syncedAt": null,
    "iconCount": 877
  },
  "lucide": {
    "label": "Lucide",
    "exportPath": "@kamod/icons/lucide",
    "upstream": {
      "type": "npm",
      "package": "lucide-static",
      "versionPackage": "lucide",
      "version": "1.22.0",
      "repository": "https://github.com/lucide-icons/lucide",
      "license": "ISC"
    },
    "syncedAt": null,
    "iconCount": 1744
  },
  "heroicons": {
    "label": "Heroicons",
    "exportPath": "@kamod/icons/heroicons/{variant}",
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
    "syncedAt": "2026-07-01",
    "iconCount": 648
  },
  "tabler": {
    "label": "Tabler Icons",
    "exportPath": "@kamod/icons/tabler/{variant}",
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
    "syncedAt": null,
    "iconCount": 6146
  },
  "iconoir": {
    "label": "Iconoir",
    "exportPath": "@kamod/icons/iconoir/{variant}",
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
    "syncedAt": null,
    "iconCount": 1671
  }
};
export {
  iconSources
};
//# sourceMappingURL=meta.js.map