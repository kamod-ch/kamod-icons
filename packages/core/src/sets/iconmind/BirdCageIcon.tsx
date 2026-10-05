import type { IconProps } from "../../shared/types";

export function BirdCageIcon({
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
      <path d="M5 20v-8c0-4 3-7 7-7s7 3 7 7v8ZM9 7v13m6-13v13M12 2v3"/>
    </svg>
  );
}
