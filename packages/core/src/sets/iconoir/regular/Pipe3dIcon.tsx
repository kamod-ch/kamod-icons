import type { IconProps } from "../../../shared/types";

export function Pipe3dIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 20a6 6 0 1 1 0-12 6 6 0 0 1 0 12m.773-15.258a6 6 0 0 1 8.7 8.258M3 21l6.5-6.5M21 3l-1.5 1.5M6 9.5 10.5 5l.25-.25M14.5 18l4.719-4.719"/>
    </svg>
  );
}
