import type { IconProps } from "../../../shared/types";

export function CellSignalOffIcon({
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
      <path d="M20 20H4.731a.731.731 0 0 1-.517-1.249l7.265-7.264m2-2 5.272-5.272A.731.731 0 0 1 20 4.732v11.269M3 3l18 18"/>
    </svg>
  );
}
