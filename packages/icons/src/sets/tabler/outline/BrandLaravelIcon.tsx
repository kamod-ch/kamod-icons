import type { IconProps } from "../../../shared/types";

export function BrandLaravelIcon({
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
      <path d="m3 17 8 5 7-4v-8l-4-2.5L18 5l4 2.5v4L11 18l-4-2.5V8L3 5.5zm8 1v4m-4-6.5 7-4m0-4v4m0 0 4 2.5"/><path d="M11 13V5.5L7 3 3 5.5M7 8l4-2.5m7 4.5 4-2.5"/>
    </svg>
  );
}
