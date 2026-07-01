import type { IconProps } from "../../../shared/types";

export function RippleDownIcon({
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
      <path d="M3 7q4.5-3 9 0t9 0M3 17q4.5-3 9 0 .213.142.427.27M3 12q4.5-3 9 0 2.006 1.338 4.012 1.482M19 16v6m3-3-3 3-3-3"/>
    </svg>
  );
}
