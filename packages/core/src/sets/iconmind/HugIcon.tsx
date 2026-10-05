import type { IconProps } from "../../shared/types";

export function HugIcon({
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
      <path d="M3.5 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m11 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0M2 20v-3a4.5 4.5 0 0 1 9 0v3m2 0v-3a4.5 4.5 0 0 1 9 0v3"/>
    </svg>
  );
}
