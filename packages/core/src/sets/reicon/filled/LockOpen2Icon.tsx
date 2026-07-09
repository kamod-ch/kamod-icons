import type { IconProps } from "../../../shared/types";

export function LockOpen2Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M9.667 12a1 1 0 0 1-1-1V6.667c0-1.838-1.496-3.334-3.334-3.334S2 4.83 2 6.667v1.666a1 1 0 0 1-2 0V6.667c0-2.942 2.392-5.334 5.333-5.334s5.334 2.392 5.334 5.334V11a1 1 0 0 1-1 1Z"/><path d="M17.667 10h-10A3.67 3.67 0 0 0 4 13.667V19a3.67 3.67 0 0 0 3.667 3.667h10A3.67 3.67 0 0 0 21.333 19v-5.333A3.67 3.67 0 0 0 17.667 10Zm-4 7a1 1 0 0 1-2 0v-1.333a1 1 0 0 1 2 0z"/></g>
    </svg>
  );
}
