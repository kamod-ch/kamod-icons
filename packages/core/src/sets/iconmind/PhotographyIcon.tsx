import type { IconProps } from "../../shared/types";

export function PhotographyIcon({
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
      <path d="M5 6v13h13V6Z"/><path d="M8 3h13v13M8 15l3-3 3 3"/><path d="M11 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
