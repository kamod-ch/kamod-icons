import type { IconProps } from "../../../shared/types";

export function RoadmapIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.667 15H6.059c-.452 0-.874-.23-1.12-.61L1.667 9.334l3.272-5.057c.245-.38.666-.61 1.12-.61h7.608a2.666 2.666 0 0 1 2.666 2.667v6A2.666 2.666 0 0 1 13.667 15"/><path d="M8.056 19c.464.788 1.296 1.333 2.277 1.333h7.608c.452 0 .874-.229 1.12-.609l3.272-5.057-2-3.09"/></g>
    </svg>
  );
}
