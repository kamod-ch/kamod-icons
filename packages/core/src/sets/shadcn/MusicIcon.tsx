import type { IconProps } from "../../shared/types";

export function MusicIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18V5l12-2v13"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6m12-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  );
}
