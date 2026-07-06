import type { IconProps } from "../../../shared/types";

export function DivideIcon({
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
      <path fill="currentColor" d="M11 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M5 12h14"/>
    </svg>
  );
}
