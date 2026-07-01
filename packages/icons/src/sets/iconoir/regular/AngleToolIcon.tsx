import type { IconProps } from "../../../shared/types";

export function AngleToolIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 21V3h6v12h12v6z"/><path stroke="currentColor" strokeLinecap="round" d="M13 19v2m-4-2v2M3 7h2m-2 4h2m-2 4h2m12 4v2"/>
    </svg>
  );
}
