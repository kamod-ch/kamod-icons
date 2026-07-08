import type { IconProps } from "../../../shared/types";

export function Alarm3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 22h20M12 6a9 9 0 0 0-9 9v7h18v-7a9 9 0 0 0-9-9m0-4v1M4 4l1 1m15-1-1 1"/>
    </svg>
  );
}
