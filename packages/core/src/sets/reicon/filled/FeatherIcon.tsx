import type { IconProps } from "../../../shared/types";

export function FeatherIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="M20.333 3.667c-9.85.862-13.957 7.851-15.612 12.501.515.272.887.44.887.44 1.08.484 2.15.697 2.212.708q1.708.312 3.156.312c2.01 0 3.64-.45 4.867-1.347a5.5 5.5 0 0 0 1.6-1.818c-2.852-.429-4.672-1.713-4.672-1.713s4.395.332 5.789-.769c.642-.507 1.199-1.33 1.488-2.441.21-.81.304-1.605.417-2.368.18-1.201.35-2.335.735-3.008a.98.98 0 0 0 .109-.598c-.586.058-.976.1-.976.1Z"/><path d="M3.668 21.333a1 1 0 0 1-.995-1.113c.018-.162 2.021-16.189 17.573-17.55a1 1 0 0 1 .175 1.992C6.478 5.883 4.677 20.302 4.66 20.448a1 1 0 0 1-.993.886Z"/></g>
    </svg>
  );
}
