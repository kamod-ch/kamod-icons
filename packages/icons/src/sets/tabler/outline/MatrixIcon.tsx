import type { IconProps } from "../../../shared/types";

export function MatrixIcon({
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
      <path d="M8 16h.013m3.997 0h.005m4 0h.005m-.005-4h.005m-8.01 0h.005m3.995 0h.005m4.005-4h.005m-8.01 0h.005m3.995 0h.005M7 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-1"/>
    </svg>
  );
}
