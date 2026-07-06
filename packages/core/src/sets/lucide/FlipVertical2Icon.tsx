import type { IconProps } from "../../shared/types";

export function FlipVertical2Icon({
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
      <path d="m17 3-5 5-5-5zm0 18-5-5-5 5zM4 12H2m8 0H8m8 0h-2m8 0h-2"/>
    </svg>
  );
}
