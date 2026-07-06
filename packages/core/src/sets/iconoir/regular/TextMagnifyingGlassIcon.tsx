import type { IconProps } from "../../../shared/types";

export function TextMagnifyingGlassIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5 21 21m-7-4a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9 5v12m0 0H7m2 0h2m4-10V5H3v2"/>
    </svg>
  );
}
