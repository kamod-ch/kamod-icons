import type { IconProps } from "../../shared/types";

export function EventStreamIcon({
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
      <path d="M2.5 2.5 5 5m2.5 2.5L10 10m2.5 2.5L15 15m5.5 2v3.5H17"/>
    </svg>
  );
}
