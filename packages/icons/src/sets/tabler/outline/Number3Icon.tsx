import type { IconProps } from "../../../shared/types";

export function Number3Icon({
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
      <path d="M12 12a4 4 0 1 0-4-4m0 8a4 4 0 1 0 4-4"/>
    </svg>
  );
}
