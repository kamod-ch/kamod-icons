import type { IconProps } from "../../shared/types";

export function LayoutGridIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3H3v7h7zm11 0h-7v7h7zm0 11h-7v7h7zm-11 0H3v7h7z"/>
    </svg>
  );
}
