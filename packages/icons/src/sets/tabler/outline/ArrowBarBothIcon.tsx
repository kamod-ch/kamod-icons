import type { IconProps } from "../../../shared/types";

export function ArrowBarBothIcon({
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
      <path d="M8 12H2m3 3-3-3 3-3m17 3h-6m3 3 3-3-3-3m-7-5v16"/>
    </svg>
  );
}
