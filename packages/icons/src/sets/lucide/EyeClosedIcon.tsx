import type { IconProps } from "../../shared/types";

export function EyeClosedIcon({
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
      <path d="m15 18-.722-3.25M2 8a10.645 10.645 0 0 0 20 0m-2 7-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25"/>
    </svg>
  );
}
