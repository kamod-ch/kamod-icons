import type { IconProps } from "../../shared/types";

export function DatabaseArrowUpIcon({
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
      <path d="M19 22v-6m2-3.464V5m1 14-3-3-3 3M3 12a9 3 0 0 0 11.457 2.886"/><path d="M3 5v14a9 3 0 0 0 10.318 2.968"/><ellipse cx="12" cy="5" rx="9" ry="3"/>
    </svg>
  );
}
