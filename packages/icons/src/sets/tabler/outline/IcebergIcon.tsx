import type { IconProps } from "../../../shared/types";

export function IcebergIcon({
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
      <path d="m19 10-2 9-4 3-3-5-3-1-2-6 2-5 3-2 3 3 4 1zM3 10h18"/>
    </svg>
  );
}
