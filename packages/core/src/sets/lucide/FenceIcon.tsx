import type { IconProps } from "../../shared/types";

export function FenceIcon({
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
      <path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Zm2 5h4M6 18h4m2-15-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Zm2 5h4m-4 10h4m2-15-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/>
    </svg>
  );
}
