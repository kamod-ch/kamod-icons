import type { IconProps } from "../../../shared/types";

export function ArrowsDownIcon({
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
      <path d="M7 21V3m13 15-3 3-3-3M4 18l3 3 3-3m7 3V3"/>
    </svg>
  );
}
