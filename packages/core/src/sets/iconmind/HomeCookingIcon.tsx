import type { IconProps } from "../../shared/types";

export function HomeCookingIcon({
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
      <path d="M3 12h14c0 5-3 8-7 8s-7-3-7-8m14 0 4-4M8 9c2-2 0-4 2-6m3 6c2-2 0-4 2-6"/>
    </svg>
  );
}
