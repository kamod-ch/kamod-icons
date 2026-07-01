import type { IconProps } from "../../../shared/types";

export function Square3dThreePointsIcon({
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
      <path stroke="currentColor" d="M3 21V3.6a.6.6 0 0 1 .6-.6H21"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 21h3.4a.6.6 0 0 0 .6-.6V17m0-10v2m0 3v2M7 21h2m3 0h2"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    </svg>
  );
}
