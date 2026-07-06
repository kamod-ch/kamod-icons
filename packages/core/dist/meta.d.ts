type IconSourceUpstream = {
    type: "npm";
    package: string;
    version: string;
    versionPackage?: string;
    repository: string;
    license: string;
    note?: string;
};
type IconSourceSet = {
    label: string;
    exportPath: string;
    variants?: string[];
    upstream: IconSourceUpstream;
    syncedAt: string | null;
    iconCount: number;
};
declare const iconSources: {
    readonly shadcn: {
        readonly label: "shadcn/ui";
        readonly exportPath: "@kamod-ch/icons/shadcn";
        readonly upstream: {
            readonly type: "npm";
            readonly package: "lucide-static";
            readonly versionPackage: "lucide";
            readonly version: "1.23.0";
            readonly repository: "https://github.com/lucide-icons/lucide";
            readonly license: "ISC";
            readonly note: "Lucide subset with legacy icon names used by shadcn/ui. There is no separate shadcn icons npm package.";
        };
        readonly syncedAt: "2026-07-03";
        readonly iconCount: 877;
    };
    readonly lucide: {
        readonly label: "Lucide";
        readonly exportPath: "@kamod-ch/icons/lucide";
        readonly upstream: {
            readonly type: "npm";
            readonly package: "lucide-static";
            readonly versionPackage: "lucide";
            readonly version: "1.23.0";
            readonly repository: "https://github.com/lucide-icons/lucide";
            readonly license: "ISC";
        };
        readonly syncedAt: "2026-07-03";
        readonly iconCount: 1994;
    };
    readonly heroicons: {
        readonly label: "Heroicons";
        readonly exportPath: "@kamod-ch/icons/heroicons/{variant}";
        readonly variants: ["outline", "solid"];
        readonly upstream: {
            readonly type: "npm";
            readonly package: "heroicons";
            readonly versionPackage: "@heroicons/react";
            readonly version: "2.2.0";
            readonly repository: "https://github.com/tailwindlabs/heroicons";
            readonly license: "MIT";
        };
        readonly syncedAt: "2026-07-03";
        readonly iconCount: 648;
    };
    readonly tabler: {
        readonly label: "Tabler Icons";
        readonly exportPath: "@kamod-ch/icons/tabler/{variant}";
        readonly variants: ["outline", "filled"];
        readonly upstream: {
            readonly type: "npm";
            readonly package: "@tabler/icons";
            readonly version: "3.44.0";
            readonly repository: "https://github.com/tabler/tabler-icons";
            readonly license: "MIT";
        };
        readonly syncedAt: "2026-07-03";
        readonly iconCount: 6146;
    };
    readonly iconoir: {
        readonly label: "Iconoir";
        readonly exportPath: "@kamod-ch/icons/iconoir/{variant}";
        readonly variants: ["regular", "solid"];
        readonly upstream: {
            readonly type: "npm";
            readonly package: "iconoir";
            readonly version: "7.11.1";
            readonly repository: "https://github.com/iconoir-icons/iconoir";
            readonly license: "MIT";
        };
        readonly syncedAt: "2026-07-03";
        readonly iconCount: 1671;
    };
};
type IconSourceName = keyof typeof iconSources;

export { type IconSourceName, type IconSourceSet, type IconSourceUpstream, iconSources };
