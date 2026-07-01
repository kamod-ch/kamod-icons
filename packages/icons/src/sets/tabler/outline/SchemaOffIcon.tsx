import type { IconProps } from "../../../shared/types";

export function SchemaOffIcon({
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
      <path d="M6 2h4v4M6 6H5V5m10 6v-1h5v4h-2M5 18h5v4H5zm0-8h5v4H5zm5 2h2M7.5 7.5V10m0 4v4M3 3l18 18"/>
    </svg>
  );
}
