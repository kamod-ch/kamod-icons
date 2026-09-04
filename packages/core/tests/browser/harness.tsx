import { render } from "preact";
import {
  BellAnimatedIcon,
  CheckAnimatedIcon,
  HeartAnimatedIcon,
  LoaderCircleAnimatedIcon,
  SearchAnimatedIcon,
} from "@kamod-ch/icons/lucide/animated";

function mount(label: string, node: preact.ComponentChild) {
  const row = document.createElement("div");
  row.className = "row";
  row.dataset.testid = label;
  const heading = document.createElement("h2");
  heading.textContent = label;
  const slot = document.createElement("div");
  slot.className = "slot";
  row.append(heading, slot);
  render(node, slot);
  return row;
}

const app = document.getElementById("app");
if (!app) throw new Error("Missing #app");

app.append(
  mount(
    "search-hover",
    <SearchAnimatedIcon id="search" size={32} animateOnHover="scan" title="Search" />,
  ),
  mount("bell-programmatic", <BellAnimatedIcon id="bell" size={32} title="Bell" />),
  mount("check-draw", <CheckAnimatedIcon id="check" size={32} title="Check" />),
  mount("heart-pulse", <HeartAnimatedIcon id="heart" size={32} title="Heart" />),
  mount("loader-spin", <LoaderCircleAnimatedIcon id="loader" size={32} title="Loading" />),
  mount(
    "parent-focus",
    <button type="button" class="icon-btn" aria-label="Search action" id="parent-btn">
      <SearchAnimatedIcon size={32} animateOnFocus="scan" triggerTarget="parent" title="Search" />
    </button>,
  ),
);

(window as unknown as { __playwright?: Record<string, () => void> }).__playwright = {
  playBell: () => {
    const icon = document.querySelector("#bell") as HTMLElement | null;
    icon?.dispatchEvent(new CustomEvent("kamod-play"));
  },
  animateCheck: () => {
    const slot = document.querySelector('[data-testid="check-draw"] .slot')!;
    render(<CheckAnimatedIcon size={32} animate="draw" title="Check" />, slot);
  },
  animateLoader: () => {
    const slot = document.querySelector('[data-testid="loader-spin"] .slot')!;
    render(<LoaderCircleAnimatedIcon size={32} animate="spin" loop title="Loading" />, slot);
  },
  animateHeart: () => {
    const slot = document.querySelector('[data-testid="heart-pulse"] .slot')!;
    render(<HeartAnimatedIcon size={32} animate="pulse" title="Heart" />, slot);
  },
};
