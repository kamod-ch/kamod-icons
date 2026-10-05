import type { IconProps } from "../../shared/types";

export function SmartBulbIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M10 4c3.5 0 6 2.5 6 6 0 2.5-2 4-2 6H6c0-2-2-3.5-2-6 0-3.5 2.5-6 6-6M7 19h6m6-11c2 3 2 7 0 10"/>
    </svg>
  );
}
