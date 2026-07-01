import type { IconProps } from "../../../shared/types";

export function ArrowForwardIcon({
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
      <path d="m15 11 4 4-4 4m4-4H8a4 4 0 0 1 0-8h1"/>
    </svg>
  );
}
