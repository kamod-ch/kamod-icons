import type { IconProps } from "../../../shared/types";

export function LifebuoyIcon({
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
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m12 3 3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9"/>
    </svg>
  );
}
