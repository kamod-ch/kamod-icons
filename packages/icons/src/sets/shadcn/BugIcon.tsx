import type { IconProps } from "../../shared/types";

export function BugIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10a4 4 0 0 0-8 0v6a4 4 0 0 0 8 0zm3-3-3 2M5 7l3 2m11 10-3-2M5 19l3-2m12-4h-4M4 13h4m2-9 1 2m3-2-1 2"/>
    </svg>
  );
}
