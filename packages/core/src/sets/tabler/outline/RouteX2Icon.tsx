import type { IconProps } from "../../../shared/types";

export function RouteX2Icon({
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
      <path d="m3 17 4 4m0-4-4 4M17 3l4 4m0-4-4 4m-3-2a2 2 0 0 0-2 2v10a2 2 0 0 1-2 2"/>
    </svg>
  );
}
