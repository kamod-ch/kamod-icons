import type { IconProps } from "../../shared/types";

export function SnowMountainIcon({
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
      <path d="m2 18 8-8 4 4 6-6 2 2"/><path d="m7 13 3-3 3 3M2 20h20"/>
    </svg>
  );
}
