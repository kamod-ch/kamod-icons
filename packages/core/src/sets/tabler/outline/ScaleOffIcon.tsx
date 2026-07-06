import type { IconProps } from "../../../shared/types";

export function ScaleOffIcon({
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
      <path d="M7 20h10M9.452 5.425 12 5l6 1m-6-3v5m0 4v8m-3-8L6 6l-3 6a3 3 0 0 0 6 0m9.873 2.871A3 3 0 0 0 21 12l-3-6-2.677 5.355M3 3l18 18"/>
    </svg>
  );
}
