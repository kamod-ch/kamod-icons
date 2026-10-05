import type { IconProps } from "../../shared/types";

export function IndexSnapshotIcon({
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
      <path d="m15 7 5 5-8 8-8-8 5-5"/><path d="M8.24 11.63a4 4 0 0 1 7.5 0"/><path d="M10 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
