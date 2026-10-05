import type { IconProps } from "../../shared/types";

export function ThreatHuntIcon({
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
      <path d="M3 5h8v6l-4 4-4-4Zm11 5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m6 2.5 2 2"/>
    </svg>
  );
}
