import type { IconProps } from "../../../shared/types";

export function MusicOffIcon({
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
      <path d="M3 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0m11.42-2.55a3 3 0 1 0 4.138 4.119M9 17V9m0-4V4h10v11m-7-7h7M3 3l18 18"/>
    </svg>
  );
}
