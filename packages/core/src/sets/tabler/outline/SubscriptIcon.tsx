import type { IconProps } from "../../../shared/types";

export function SubscriptIcon({
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
      <path d="m5 7 8 10m-8 0 8-10m8 13h-4l3.5-4a1.73 1.73 0 0 0-3.5-2"/>
    </svg>
  );
}
