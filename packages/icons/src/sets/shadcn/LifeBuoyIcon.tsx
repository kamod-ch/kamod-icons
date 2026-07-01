import type { IconProps } from "../../shared/types";

export function LifeBuoyIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4.93 4.93l4.24 4.24m5.66 5.66 4.24 4.24m-4.24-9.9 4.24-4.24m-4.24 4.24 3.53-3.53M4.93 19.07l4.24-4.24"/>
    </svg>
  );
}
