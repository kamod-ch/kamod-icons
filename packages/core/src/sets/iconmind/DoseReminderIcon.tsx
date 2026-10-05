import type { IconProps } from "../../shared/types";

export function DoseReminderIcon({
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
      <path d="m4 11 5-5a3.5 3.5 0 0 1 5 5l-5 5a3.5 3.5 0 0 1-5-5m9 6a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M17 14v3h3"/>
    </svg>
  );
}
