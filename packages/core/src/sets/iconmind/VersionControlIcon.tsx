import type { IconProps } from "../../shared/types";

export function VersionControlIcon({
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
      <path d="M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12-6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 8v8M8 6h4l4 4"/>
    </svg>
  );
}
