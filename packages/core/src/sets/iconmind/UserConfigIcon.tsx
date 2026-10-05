import type { IconProps } from "../../shared/types";

export function UserConfigIcon({
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
      <path d="M6 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 21a6 6 0 0 1 12 0m0-10.5h6m-2-2v4m-4 2h6m-4-2v4"/>
    </svg>
  );
}
