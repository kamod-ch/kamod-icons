import type { IconProps } from "../../../shared/types";

export function ArrowsRightIcon({
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
      <path d="M21 17H3M18 4l3 3-3 3m0 10 3-3-3-3m3-7H3"/>
    </svg>
  );
}
