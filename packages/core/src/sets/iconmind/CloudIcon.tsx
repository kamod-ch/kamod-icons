import type { IconProps } from "../../shared/types";

export function CloudIcon({
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
      <path d="M4 18a4 4 0 0 1 2-7.5A5 5 0 0 1 15.5 9a5.5 5.5 0 0 1 4.5 9Z"/>
    </svg>
  );
}
