import type { IconProps } from "../../../shared/types";

export function Number14SmallIcon({
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
      <path d="M8 8h1v8m4-8v3a1 1 0 0 0 1 1h3m0-4v8"/>
    </svg>
  );
}
