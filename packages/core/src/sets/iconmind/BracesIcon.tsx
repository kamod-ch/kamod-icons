import type { IconProps } from "../../shared/types";

export function BracesIcon({
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
      <path d="M11 3H8v7l-2 2 2 2v7h3m2-18h3v7l2 2-2 2v7h-3"/>
    </svg>
  );
}
