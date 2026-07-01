import type { IconProps } from "../../../shared/types";

export function Bridge3dIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 4h3"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 20s6.5-2.5 2-8 2-8 2-8M3 20h3"/>
    </svg>
  );
}
