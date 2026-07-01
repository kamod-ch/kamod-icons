import type { IconProps } from "../../../shared/types";

export function AccessibilityTechIcon({
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
      <path stroke="currentColor" d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.5 12.16 4-.16-.5 4.5M11.833 12 13.5 9.538 10.833 8 9.5 9.846"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.5 7.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 18a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
    </svg>
  );
}
