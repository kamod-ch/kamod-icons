import type { IconProps } from "../../shared/types";

export function SurgeryIcon({
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
      <path d="M5 8h14v5a7 5 0 0 1-14 0Zm2 3h10M7 14h10M5 14a3 3 0 0 1 0-6m14 0a3 3 0 0 1 0 6"/>
    </svg>
  );
}
