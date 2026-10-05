import type { IconProps } from "../../shared/types";

export function HeapSnapshotIcon({
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
      <path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5 1.5 1.5 0 0 1 14.5 5h-5A1.5 1.5 0 0 1 8 3.5M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M8 14a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M11 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
