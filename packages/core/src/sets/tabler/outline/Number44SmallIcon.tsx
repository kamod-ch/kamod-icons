import type { IconProps } from "../../../shared/types";

export function Number44SmallIcon({
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
      <path d="M14 8v3a1 1 0 0 0 1 1h3m0-4v8M6 8v3a1 1 0 0 0 1 1h3m0-4v8"/>
    </svg>
  );
}
