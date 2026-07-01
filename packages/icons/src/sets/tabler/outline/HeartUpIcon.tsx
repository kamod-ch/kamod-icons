import type { IconProps } from "../../../shared/types";

export function HeartUpIcon({
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
      <path d="m12 20-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.893 6.139M19 22v-6m3 3-3-3-3 3"/>
    </svg>
  );
}
