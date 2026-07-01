import type { IconProps } from "../../../shared/types";

export function WallpaperOffIcon({
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
      <path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409A2 2 0 0 1 18 20H6"/><path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M8 18V8M4.573 4.598A2 2 0 0 0 4 6v12M3 3l18 18"/>
    </svg>
  );
}
