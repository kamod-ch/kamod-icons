import type { IconProps } from "../../../shared/types";

export function PackageImportIcon({
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
      <path d="m12 21-8-4.5v-9L12 3l8 4.5V12m-8 0 8-4.5M12 12v9m0-9L4 7.5M22 18h-7m3-3-3 3 3 3"/>
    </svg>
  );
}
