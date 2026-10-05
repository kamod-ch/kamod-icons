import type { IconProps } from "../../shared/types";

export function LeafFallIcon({
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
      <path d="M4 11c0-4.8 3.2-8 8-8 0 4.8-3.2 8-8 8m8 9c0-4.8 3.2-8 8-8 0 4.8-3.2 8-8 8"/>
    </svg>
  );
}
