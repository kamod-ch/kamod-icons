import type { IconProps } from "../../../shared/types";

export function IroningOffIcon({
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
      <path d="M10 6h6.459a3 3 0 0 1 2.959 2.507l.577 3.464.804 4.821.007.044M18 18H3a7 7 0 0 1 7-7h1m4 0h4.8M3 3l18 18"/>
    </svg>
  );
}
