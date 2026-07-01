import type { IconProps } from "../../../shared/types";

export function OlympicTorchIcon({
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
      <path d="M14 21h-4c0-4.364-1-7-2-11q4 2 8 0c-1 4-2 6.636-2 11M11 2c0 2.5-1 2.66-1 4a1.9 1.9 0 0 0 2 2 1.87 1.87 0 0 0 2-2c0-1.41-1-3-3-4"/>
    </svg>
  );
}
