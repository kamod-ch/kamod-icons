import type { IconProps } from "../../shared/types";

export function PhishingIcon({
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
      <path d="M13 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v9.5m0 0a4.5 4.5 0 0 1-9 0M6 11v4.5"/>
    </svg>
  );
}
