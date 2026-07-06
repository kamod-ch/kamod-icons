import type { IconProps } from "../../../shared/types";

export function HorizontalSplitIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 12H2m0 0 3.5-3.5M2 12l3.5 3.5M14 12h8m0 0-3.5-3.5M22 12l-3.5 3.5M10 21V3m4 18V3"/>
    </svg>
  );
}
