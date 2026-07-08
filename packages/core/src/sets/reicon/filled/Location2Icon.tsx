import type { IconProps } from "../../../shared/types";

export function Location2Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M17.333 6.667c0-2.942-2.392-5.334-5.333-5.334S6.667 3.725 6.667 6.667c0 2.598 1.869 4.762 4.333 5.232v5.768a1 1 0 0 0 2 0v-5.768c2.464-.471 4.333-2.634 4.333-5.232Z"/><path d="M12 22.667c-3.961 0-10.667-.772-10.667-3.667 0-2.148 3.558-3.045 6.543-3.42a1 1 0 0 1 .248 1.984c-3.019.38-4.43 1.083-4.75 1.437.487.552 3.337 1.667 8.625 1.667s8.137-1.115 8.624-1.667c-.32-.354-1.73-1.057-4.75-1.437a1 1 0 0 1 .248-1.984c2.986.375 6.543 1.273 6.543 3.42 0 2.895-6.705 3.667-10.667 3.667Z"/></g>
    </svg>
  );
}
