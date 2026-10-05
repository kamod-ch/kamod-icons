import type { IconProps } from "../../shared/types";

export function HeatWarningIcon({
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
      <path d="M12 3.5 21.5 20h-19Z"/><path d="M8.5 14a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0"/>
    </svg>
  );
}
