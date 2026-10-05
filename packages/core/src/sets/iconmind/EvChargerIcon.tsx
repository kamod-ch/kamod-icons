import type { IconProps } from "../../shared/types";

export function EvChargerIcon({
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
      <path d="M4 21V5l3-3h6l3 3v16Z"/><path d="m13 6-2.5 2.5H13L10.5 11M16 9h3l2 2v6"/>
    </svg>
  );
}
