import type { IconProps } from "../../../shared/types";

export function DualScreenIcon({
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
      <path d="m5 4 8 3v15l-8-3z"/><path d="M13 19h6V4H5"/>
    </svg>
  );
}
