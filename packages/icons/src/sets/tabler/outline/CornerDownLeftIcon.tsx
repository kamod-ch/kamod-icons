import type { IconProps } from "../../../shared/types";

export function CornerDownLeftIcon({
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
      <path d="M18 6v6a3 3 0 0 1-3 3H5l4-4m0 8-4-4"/>
    </svg>
  );
}
