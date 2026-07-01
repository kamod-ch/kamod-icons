import type { IconProps } from "../../shared/types";

export function SquareTerminalIcon({
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
      <path d="m7 11 2-2-2-2m4 6h4"/><rect x="3" y="3" rx="2" ry="2"/>
    </svg>
  );
}
