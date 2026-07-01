import type { IconProps } from "../../../shared/types";

export function LinkOffIcon({
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
      <path d="m9 15 3-3m2-2 1-1m-4-3 .463-.536a5 5 0 0 1 7.071 7.072L18 13M3 3l18 18m-8-3-.397.534a5.07 5.07 0 0 1-7.127 0 4.97 4.97 0 0 1 0-7.071L6 11"/>
    </svg>
  );
}
