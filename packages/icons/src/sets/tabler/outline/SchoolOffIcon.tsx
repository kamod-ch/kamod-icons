import type { IconProps } from "../../../shared/types";

export function SchoolOffIcon({
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
      <path d="M22 9 12 5l-2.136.854M7 7 2 9l10 4 .697-.279m2.878-1.151L22 9v6"/><path d="M6 10.6V16c0 1.657 2.686 3 6 3 2.334 0 4.357-.666 5.35-1.64M18 14v-3.4M3 3l18 18"/>
    </svg>
  );
}
