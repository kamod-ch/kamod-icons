import type { IconProps } from "../../shared/types";

export function SandstormIcon({
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
      <path d="M3 6h15M5 10h16M3 20a5 5 0 0 1 10 0m0 0a4 4 0 0 1 8 0M2 20h20"/>
    </svg>
  );
}
