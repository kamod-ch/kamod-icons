import type { IconProps } from "../../shared/types";

export function GalaxyIcon({
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
      <path d="M12 12c0-3 3-5 6-3s2 8-3 10c-6 2-11-2-11-8 0-5 5-8 10-8"/><path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
