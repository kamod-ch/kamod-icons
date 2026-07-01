import type { IconProps } from "../../../shared/types";

export function SpaceOffIcon({
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
      <path d="M4 10v3a1 1 0 0 0 1 1h9m4 0h1a1 1 0 0 0 1-1v-3M3 3l18 18"/>
    </svg>
  );
}
