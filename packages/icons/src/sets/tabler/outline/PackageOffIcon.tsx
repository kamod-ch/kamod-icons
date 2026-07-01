import type { IconProps } from "../../../shared/types";

export function PackageOffIcon({
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
      <path d="M8.812 4.793 12 3l8 4.5V16m-2.282 1.784L12 21l-8-4.5v-9l2.223-1.25m8.32 4.32L20 7.5M12 12v9m0-9L4 7.5m12-2.25-4.35 2.447M9.086 9.139 8 9.75M3 3l18 18"/>
    </svg>
  );
}
