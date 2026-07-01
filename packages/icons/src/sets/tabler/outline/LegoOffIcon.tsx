import type { IconProps } from "../../../shared/types";

export function LegoOffIcon({
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
      <path d="M9.5 11h.01m-.01 4a3.5 3.5 0 0 0 5 0"/><path d="M8 4V3h8v2h1a3 3 0 0 1 3 3v8m-.884 3.127A3 3 0 0 1 17 20v1H7v-1a3 3 0 0 1-3-3V8c0-1.083.574-2.032 1.435-2.56M3 3l18 18"/>
    </svg>
  );
}
