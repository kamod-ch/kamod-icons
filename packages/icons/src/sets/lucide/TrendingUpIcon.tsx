import type { IconProps } from "../../shared/types";

export function TrendingUpIcon({
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
      <path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>
    </svg>
  );
}
