import type { IconProps } from "../../../shared/types";

export function TrendingUpDownIcon({
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
      <path d="m2 14 6-6 4 4 9-9"/><path d="M15 3h6v6m-6 12h6v-6m0 6-6-6"/>
    </svg>
  );
}
