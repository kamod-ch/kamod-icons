import type { IconProps } from "../../shared/types";

export function SnapshotTestIcon({
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
      <path d="M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3"/><path d="M9 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
