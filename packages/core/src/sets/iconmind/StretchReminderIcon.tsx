import type { IconProps } from "../../shared/types";

export function StretchReminderIcon({
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
      <path d="M4 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M7 8v5l4 4v4m-4-8h6m3-4a3 3 0 0 1 0 6"/><path d="M16 6a6 6 0 0 1 0 12"/>
    </svg>
  );
}
