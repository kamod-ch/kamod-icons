import type { IconProps } from "../../../shared/types";

export function Number6Icon({
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
      <path d="M8 16a4 4 0 1 0 8 0v-1a4 4 0 1 0-8 0"/><path d="M16 8a4 4 0 1 0-8 0v8"/>
    </svg>
  );
}
