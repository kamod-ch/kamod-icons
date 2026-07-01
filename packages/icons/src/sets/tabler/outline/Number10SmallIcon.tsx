import type { IconProps } from "../../../shared/types";

export function Number10SmallIcon({
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
      <path d="M8 8h1v8m5-6v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0"/>
    </svg>
  );
}
