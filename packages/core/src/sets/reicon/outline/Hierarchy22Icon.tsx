import type { IconProps } from "../../../shared/types";

export function Hierarchy22Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15V8m.25 14a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5.13 15a4.06 4.06 0 0 1 3.94-3.04l3.43.01c2.62.01 4.85-1.67 5.67-4.01"/>
    </svg>
  );
}
