import type { IconProps } from "../../../shared/types";

export function SeedlingIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 3a7 7 0 0 1 6.95 6.155A6.97 6.97 0 0 1 18 7h3a1 1 0 0 1 1 1v1a7 7 0 0 1-7 7h-2v4a1 1 0 0 1-2 0v-7H9a7 7 0 0 1-7-7V4a1 1 0 0 1 1-1z"/>
    </svg>
  );
}
