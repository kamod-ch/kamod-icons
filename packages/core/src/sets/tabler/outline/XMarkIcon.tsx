import type { IconProps } from "../../../shared/types";

export function XMarkIcon({
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
      <path d="m12 16 3.644 3.644a1.21 1.21 0 0 0 1.712 0l2.288-2.288a1.21 1.21 0 0 0 0-1.712L16 12l3.644-3.644a1.21 1.21 0 0 0 0-1.712l-2.288-2.288a1.21 1.21 0 0 0-1.712 0L12 8 8.356 4.356a1.21 1.21 0 0 0-1.712 0L4.356 6.644a1.21 1.21 0 0 0 0 1.712L8 12l-3.644 3.644a1.21 1.21 0 0 0 0 1.712l2.288 2.288a1.21 1.21 0 0 0 1.712 0z"/>
    </svg>
  );
}
