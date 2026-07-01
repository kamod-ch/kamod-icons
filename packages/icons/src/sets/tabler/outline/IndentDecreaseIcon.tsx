import type { IconProps } from "../../../shared/types";

export function IndentDecreaseIcon({
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
      <path d="M20 6h-7m7 6h-9m9 6h-7M8 8l-4 4 4 4"/>
    </svg>
  );
}
