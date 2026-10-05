import type { IconProps } from "../../shared/types";

export function BlizzardIcon({
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
      <path d="M3 6h11m-8 6h14M3 18h11m4.5-15v6m-3 0 6-6m-3 12v6m-3 0 6-6"/>
    </svg>
  );
}
