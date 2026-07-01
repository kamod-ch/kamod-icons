import type { IconProps } from "../../../shared/types";

export function GitCherryPickIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-9v6m0 6v6m6-14h2.5l1.5 5-1.5 5H13m4-5h3"/>
    </svg>
  );
}
