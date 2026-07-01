import type { IconProps } from "../../shared/types";

export function Minimize2Icon({
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
      <path d="m14 10 7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"/>
    </svg>
  );
}
