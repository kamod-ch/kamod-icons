import type { IconProps } from "../../shared/types";

export function PaintPaletteIcon({
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
      <path d="M12 3a9 9 0 1 0 0 18 2.5 2.5 0 0 0 0-5 2 2 0 0 1 0-4h5a4 4 0 0 0 4-4c0-3-4-5-9-5"/><path d="M7 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-1 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
