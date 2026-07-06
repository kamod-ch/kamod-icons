import type { IconProps } from "../../../shared/types";

export function Arc3dIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 16c0-5.523-4.477-10-10-10S2 10.477 2 16"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2m20 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    </svg>
  );
}
