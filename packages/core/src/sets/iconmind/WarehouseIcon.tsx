import type { IconProps } from "../../shared/types";

export function WarehouseIcon({
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
      <path d="M2 20V10l3-3h14l3 3v10"/><path d="M6 14.5A2.5 2.5 0 0 1 8.5 12a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 8.5 20 2.5 2.5 0 0 1 6 17.5Zm8 0a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5Z"/>
    </svg>
  );
}
