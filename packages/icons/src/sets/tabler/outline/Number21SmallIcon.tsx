import type { IconProps } from "../../../shared/types";

export function Number21SmallIcon({
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
      <path d="M15 8h1v8M7 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"/>
    </svg>
  );
}
