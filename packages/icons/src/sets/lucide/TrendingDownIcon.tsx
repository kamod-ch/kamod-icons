import type { IconProps } from "../../shared/types";

export function TrendingDownIcon({
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
      <path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/>
    </svg>
  );
}
