import type { IconProps } from "../../shared/types";

export function TextSearchIcon({
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
      <path d="M3 6h18M3 12h8m-8 6h8m2.5-3a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5 2 2.5 2.5"/>
    </svg>
  );
}
