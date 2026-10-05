import type { IconProps } from "../../shared/types";

export function AtLeastOnceIcon({
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
      <path d="M3 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M5 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m7-3 2 2 3.5-3.5M14 14l2 2 3.5-3.5"/>
    </svg>
  );
}
