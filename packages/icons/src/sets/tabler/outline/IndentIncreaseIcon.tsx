import type { IconProps } from "../../../shared/types";

export function IndentIncreaseIcon({
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
      <path d="M20 6H9m11 6h-7m7 6H9M4 8l4 4-4 4"/>
    </svg>
  );
}
