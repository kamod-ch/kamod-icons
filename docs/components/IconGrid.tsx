import {
  AlertCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  HomeIcon,
  InfoIcon,
  MenuIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  StarIcon,
  UserIcon,
  XIcon,
  ZapIcon,
} from "@kamod/icons/shadcn";

const icons = [
  ["Search", SearchIcon],
  ["Check", CheckIcon],
  ["X", XIcon],
  ["Menu", MenuIcon],
  ["Settings", SettingsIcon],
  ["User", UserIcon],
  ["Plus", PlusIcon],
  ["Minus", MinusIcon],
  ["ArrowLeft", ArrowLeftIcon],
  ["ArrowRight", ArrowRightIcon],
  ["ChevronDown", ChevronDownIcon],
  ["ExternalLink", ExternalLinkIcon],
  ["Calendar", CalendarIcon],
  ["Bell", BellIcon],
  ["Home", HomeIcon],
  ["Info", InfoIcon],
  ["AlertCircle", AlertCircleIcon],
  ["ShieldCheck", ShieldCheckIcon],
  ["Star", StarIcon],
  ["Zap", ZapIcon],
] as const;

export default function IconGrid() {
  return (
    <div class="ki-icon-grid" id="browse-icons">
      {icons.map(([name, Icon]) => (
        <div class="ki-icon-card" key={name}>
          <Icon aria-hidden="true" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
