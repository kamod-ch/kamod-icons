import type { IconProps } from "../../../shared/types";

export function ShirtOffIcon({
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
      <path d="M8.243 4.252 9 4c0 .43.09.837.252 1.206m1.395 1.472A3 3 0 0 0 15 4l6 2v5h-3v3m0 4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l2.26-.753M3 3l18 18"/>
    </svg>
  );
}
