import type { IconProps } from "../../../shared/types";

export function CornerLeftDownIcon({
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
      <path d="M18 6h-6a3 3 0 0 0-3 3v10l-4-4m8 0-4 4"/>
    </svg>
  );
}
