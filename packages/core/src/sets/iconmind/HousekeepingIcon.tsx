import type { IconProps } from "../../shared/types";

export function HousekeepingIcon({
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
      <path d="M4 6v12h16V6Zm0 6h16M6 20.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m10 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0M6 3h6"/>
    </svg>
  );
}
