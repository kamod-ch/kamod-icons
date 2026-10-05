import type { IconProps } from "../../shared/types";

export function RefundIcon({
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
      <path d="M3 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0m5-1.5v3m10-4L15.5 12l2.5 2.5m3.5-5L19 12l2.5 2.5"/>
    </svg>
  );
}
