import type { IconProps } from "../../../shared/types";

export function CaretLeftRightIcon({
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
      <path d="m14 18 6-6-6-6zm-4 0-6-6 6-6z"/>
    </svg>
  );
}
