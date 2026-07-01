import type { IconProps } from "../../../shared/types";

export function PolarShIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c-2.21 0-4-4.477-4-10S9.79 2 12 2s4 4.477 4 10-1.79 10-4 10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 21c-3-1-4-5.389-4-8.5s1.5-7 5-9.5m5 0c3 1 4 5.389 4 8.5s-1.5 7-5 9.5"/>
    </svg>
  );
}
