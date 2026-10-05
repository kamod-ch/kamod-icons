import type { IconProps } from "../../shared/types";

export function RugIcon({
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
      <path d="M3 12a9 4.5 0 1 1 18 0 9 4.5 0 1 1-18 0"/><path d="M6 12a6 3 0 1 1 12 0 6 3 0 1 1-12 0"/>
    </svg>
  );
}
