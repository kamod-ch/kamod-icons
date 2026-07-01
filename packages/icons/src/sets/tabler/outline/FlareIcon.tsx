import type { IconProps } from "../../../shared/types";

export function FlareIcon({
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
      <path d="m12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3z"/>
    </svg>
  );
}
