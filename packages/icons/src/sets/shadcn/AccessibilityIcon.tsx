import type { IconProps } from "../../shared/types";

export function AccessibilityIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2 14 1-7-5.87.94M5 8l3-3 5.5 3-2.21 3.1m-7.05 3.38c-.19.58-.27 1.2-.23 1.84a5 5 0 0 0 7.11 4.21"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.76 17.52c.19-.58.27-1.2.23-1.84a5 5 0 0 0-5.31-4.67c-.65.04-1.25.2-1.8.46"/>
    </svg>
  );
}
