import type { IconProps } from "../../../shared/types";

export function CribIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5v16"/><path stroke="currentColor" strokeLinejoin="round" d="M3 16h18M3 7h18m-3 9V7m-4 9V7m-4 9V7m-4 9V7M3 19h18"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 5v16m0-16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    </svg>
  );
}
