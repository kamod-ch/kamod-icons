import type { IconProps } from "../../shared/types";

export function ScrollIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 17v2a2 2 0 0 1-4 0V5a2 2 0 1 0-4 0v3h3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 17v2a2 2 0 0 1-2 2H8m11-4V5a2 2 0 0 0-2-2H4m18 14H10"/>
    </svg>
  );
}
