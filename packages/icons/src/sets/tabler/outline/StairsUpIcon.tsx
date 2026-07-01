import type { IconProps } from "../../../shared/types";

export function StairsUpIcon({
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
      <path d="M22 6h-5v5h-5v5H7v5H2m4-11V3M3 6l3-3 3 3"/>
    </svg>
  );
}
