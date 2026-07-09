import type { IconProps } from "../../../shared/types";

export function PrintIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M17.333 7h-2V3.667A.333.333 0 0 0 15 3.333H9a.333.333 0 0 0-.333.334V7h-2V3.667A2.336 2.336 0 0 1 9 1.333h6a2.336 2.336 0 0 1 2.333 2.334z"/><path d="M18.333 6H5.667A3.67 3.67 0 0 0 2 9.667V15a3.67 3.67 0 0 0 3.667 3.667h1v1.666A2.336 2.336 0 0 0 9 22.667h6a2.336 2.336 0 0 0 2.333-2.334v-1.666h1A3.67 3.67 0 0 0 22 15V9.667A3.67 3.67 0 0 0 18.333 6Zm-3 14.333a.334.334 0 0 1-.333.334H9a.333.333 0 0 1-.333-.334v-7h6.666z"/></g>
    </svg>
  );
}
