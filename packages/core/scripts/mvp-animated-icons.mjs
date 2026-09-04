/** All 24 MVP animated icon component exports for consumer bundle checks. */
export const MVP_ANIMATED_ICON_IMPORTS = `import {
  ArrowRightAnimatedIcon,
  ArrowLeftAnimatedIcon,
  ChevronDownAnimatedIcon,
  ChevronUpAnimatedIcon,
  SearchAnimatedIcon,
  MenuAnimatedIcon,
  XAnimatedIcon,
  CheckAnimatedIcon,
  PlusAnimatedIcon,
  MinusAnimatedIcon,
  CopyAnimatedIcon,
  DownloadAnimatedIcon,
  UploadAnimatedIcon,
  RefreshCwAnimatedIcon,
  SettingsAnimatedIcon,
  BellAnimatedIcon,
  Trash2AnimatedIcon,
  LockAnimatedIcon,
  LockOpenAnimatedIcon,
  EyeAnimatedIcon,
  EyeOffAnimatedIcon,
  HeartAnimatedIcon,
  PlayAnimatedIcon,
  LoaderCircleAnimatedIcon,
} from "@kamod-ch/icons/lucide/animated";`;

export const MVP_ANIMATED_ICON_NAMES = [
  "ArrowRightAnimatedIcon",
  "ArrowLeftAnimatedIcon",
  "ChevronDownAnimatedIcon",
  "ChevronUpAnimatedIcon",
  "SearchAnimatedIcon",
  "MenuAnimatedIcon",
  "XAnimatedIcon",
  "CheckAnimatedIcon",
  "PlusAnimatedIcon",
  "MinusAnimatedIcon",
  "CopyAnimatedIcon",
  "DownloadAnimatedIcon",
  "UploadAnimatedIcon",
  "RefreshCwAnimatedIcon",
  "SettingsAnimatedIcon",
  "BellAnimatedIcon",
  "Trash2AnimatedIcon",
  "LockAnimatedIcon",
  "LockOpenAnimatedIcon",
  "EyeAnimatedIcon",
  "EyeOffAnimatedIcon",
  "HeartAnimatedIcon",
  "PlayAnimatedIcon",
  "LoaderCircleAnimatedIcon",
];

export function buildAllMvpAnimatedBundleEntry() {
  const renders = MVP_ANIMATED_ICON_NAMES.map(
    (name) => `  h(${name}, {}),`,
  ).join("\n");
  return `import { h } from "preact";
${MVP_ANIMATED_ICON_IMPORTS}
export default [
${renders}
];
`;
}
