import type { IconProps } from "../../../shared/types";

export function RugbyIcon({
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
      <path d="M14 15h-4v6h4zm-2 0v-4M8 21h8m3-18v8H5V3"/>
    </svg>
  );
}
