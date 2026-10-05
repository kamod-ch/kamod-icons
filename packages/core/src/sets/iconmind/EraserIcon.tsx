import type { IconProps } from "../../shared/types";

export function EraserIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m3 15 6-6h12l-6 6Z"/><path d="M3 15v4h12l6-6V9"/><path d="M9 9v4l-6 6"/>
    </svg>
  );
}
