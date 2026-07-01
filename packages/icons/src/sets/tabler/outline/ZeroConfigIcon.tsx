import type { IconProps } from "../../../shared/types";

export function ZeroConfigIcon({
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
      <path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0m-1 9L21 3"/>
    </svg>
  );
}
