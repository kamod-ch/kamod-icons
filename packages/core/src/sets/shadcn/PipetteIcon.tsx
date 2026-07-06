import type { IconProps } from "../../shared/types";

export function PipetteIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2 22 1-1h3l9-9M3 21v-3l9-9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 6 3.4-3.4a2.121 2.121 0 1 1 3 3L18 9l.4.4a2.12 2.12 0 1 1-3 3l-3.8-3.8a2.121 2.121 0 1 1 3-3z"/>
    </svg>
  );
}
