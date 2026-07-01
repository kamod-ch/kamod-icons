import type { IconProps } from "../../shared/types";

export function SquareCodeIcon({
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
      <path d="m10 9-3 3 3 3m4 0 3-3-3-3"/><rect x="3" y="3" rx="2"/>
    </svg>
  );
}
