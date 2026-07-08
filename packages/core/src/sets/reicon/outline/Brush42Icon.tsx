import type { IconProps } from "../../../shared/types";

export function Brush42Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 16c0-1.66 0-3 3-3h4c3 0 3-1 3-3V8c0-2 0-3-3-3h-1m-4-3H8a9.48 9.48 0 0 0 0 6h4c.65-1.95.65-4.05 0-6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 2H7Q4 2 4 5t3 3h1Q6.5 5 8 2m5 0h-1q1.5 3 0 6h1q3 0 3-3t-3-3M9.5 22h1c1.5 0 1.5-1 1.5-1.5v-3c0-.5 0-1.5-1.5-1.5h-1C8 16 8 17 8 17.5v3C8 21 8 22 9.5 22"/>
    </svg>
  );
}
