import type { IconProps } from "../../../shared/types";

export function BellAlertIcon({
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
      <path fill="currentColor" d="M11 14.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm.25-7.5v4a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0Z"/><path fill="currentColor" fillRule="evenodd" d="M12 1.25a7.32 7.32 0 0 0-7.29 6.657l-.178 1.957a11.4 11.4 0 0 1-1.865 5.283l-.033.05a2.285 2.285 0 0 0 1.901 3.553h14.93a2.285 2.285 0 0 0 1.901-3.553l-.033-.05a11.4 11.4 0 0 1-1.865-5.283l-.178-1.957A7.32 7.32 0 0 0 12 1.25ZM6.204 8.043a5.82 5.82 0 0 1 11.592 0L17.974 10c.195 2.138.92 4.193 2.11 5.98l.034.05a.785.785 0 0 1-.653 1.22H4.535a.785.785 0 0 1-.653-1.22l.033-.05A12.9 12.9 0 0 0 6.025 10z" clipRule="evenodd"/><path fill="currentColor" d="M10.05 20.124a.75.75 0 0 0-1.298.751 3.749 3.749 0 0 0 6.496 0 .75.75 0 1 0-1.298-.75 2.249 2.249 0 0 1-3.9 0Z"/>
    </svg>
  );
}
