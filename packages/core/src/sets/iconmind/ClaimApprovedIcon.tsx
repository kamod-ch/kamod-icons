import type { IconProps } from "../../shared/types";

export function ClaimApprovedIcon({
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
      <path d="M3 12a9 9 0 0 1 18 0M3 12h18m-9 0v6m0 0a2 2 0 0 1-4 0"/><path d="m9.5 7.5 2 2L15 6"/>
    </svg>
  );
}
