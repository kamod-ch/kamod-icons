import type { IconProps } from "../../shared/types";

export function Navigation2OffIcon({
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
      <path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17m-3.3-8.95L12 2l-1.17 3.17M2 2l20 20"/>
    </svg>
  );
}
