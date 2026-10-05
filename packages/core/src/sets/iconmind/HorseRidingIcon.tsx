import type { IconProps } from "../../shared/types";

export function HorseRidingIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M5 21v-8c0-4 3-7 7-7h2.5l3-3v5c2 2 2.5 4 2.5 7v6M8 12h9"/><path d="M10 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
