import type { IconProps } from "../../../shared/types";

export function AirBalloonIcon({
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
      <path d="M9 21v-3h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m0-3c-2.347-2.169-5-5.226-5-8a8 8 0 1 1 16 0c0 2.774-2.653 5.831-5 8m-9.5-4h13"/><path d="M10 14c-1.69-4.712-.924-8.197 0-11.602M14 14c1.469-3.867 1.19-7.735 0-11.602"/>
    </svg>
  );
}
