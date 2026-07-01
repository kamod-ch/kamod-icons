import type { IconProps } from "../../../shared/types";

export function ArrowForwardUpDoubleIcon({
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
      <path d="m11 14 4-4-4-4m5 8 4-4-4-4"/><path d="M15 10H8a4 4 0 1 0 0 8h1"/>
    </svg>
  );
}
