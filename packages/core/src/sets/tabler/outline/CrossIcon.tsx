import type { IconProps } from "../../../shared/types";

export function CrossIcon({
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
      <path d="M10 21h4v-9h5V8h-5V3h-4v5H5v4h5z"/>
    </svg>
  );
}
