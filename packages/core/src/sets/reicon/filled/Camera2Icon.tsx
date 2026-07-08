import type { IconProps } from "../../../shared/types";

export function Camera2Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M9 2.667H5.667a1 1 0 0 1 0-2H9a1 1 0 0 1 0 2ZM19 4H5a3.67 3.67 0 0 0-3.667 3.667v8.666A3.67 3.67 0 0 0 5 20h14a3.67 3.67 0 0 0 3.667-3.667V7.667A3.67 3.67 0 0 0 19 4ZM5.333 9.333a1.334 1.334 0 1 1 .001-2.667 1.334 1.334 0 0 1 0 2.667Zm8 6.667a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
    </svg>
  );
}
