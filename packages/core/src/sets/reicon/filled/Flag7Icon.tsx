import type { IconProps } from "../../../shared/types";

export function Flag7Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="M19 6.667h-1.667v-1A2.336 2.336 0 0 0 15 3.333H5.333v10h9.528c.298 0 .446.36.236.57l-2.23 2.23c.402.328.908.534 1.466.534H19a2.336 2.336 0 0 0 2.333-2.334V9A2.336 2.336 0 0 0 19 6.667Z"/><path d="M5 22.667a1 1 0 0 1-1-1V2.333a1 1 0 0 1 2 0v19.334a1 1 0 0 1-1 1Z"/></g>
    </svg>
  );
}
