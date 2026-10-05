import type { IconProps } from "../../shared/types";

export function BreakReminderIcon({
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
      <path d="M4 9v9h11V9m0 0a3 3 0 0 1 0 6M7 3a3 3 0 0 1 0 6m5-6a3 3 0 0 1 0 6"/>
    </svg>
  );
}
