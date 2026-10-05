import type { IconProps } from "../../shared/types";

export function EventReminderIcon({
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
      <path d="M2 6h11v3l-2 2 2 2v3H2v-3l2-2-2-2Zm11 10a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4 0v-3"/>
    </svg>
  );
}
