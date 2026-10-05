import type { IconProps } from "../../shared/types";

export function YieldIcon({
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
      <path d="M12 21V3m0 4L7 2m5 5 5-5m-5 9L7 6m5 5 5-5m-5 9-5-5m5 5 5-5"/>
    </svg>
  );
}
