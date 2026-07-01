import type { IconProps } from "../../../shared/types";

export function ArrowsLeftRightIcon({
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
      <path d="M21 17H3m3-7L3 7l3-3M3 7h18m-3 13 3-3-3-3"/>
    </svg>
  );
}
