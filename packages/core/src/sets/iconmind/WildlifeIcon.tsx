import type { IconProps } from "../../shared/types";

export function WildlifeIcon({
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
      <path d="M4 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5-3a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5 2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8 9a5.5 5.5 0 0 1 11 0 4.5 4.5 0 0 1-5.5 4A4.5 4.5 0 0 1 6 17"/>
    </svg>
  );
}
