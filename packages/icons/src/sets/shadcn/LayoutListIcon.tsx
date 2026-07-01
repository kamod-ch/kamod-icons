import type { IconProps } from "../../shared/types";

export function LayoutListIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H3v7h7zm0-11H3v7h7zm4 1h7m-7 5h7m-7 6h7m-7 5h7"/>
    </svg>
  );
}
