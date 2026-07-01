import type { IconProps } from "../../../shared/types";

export function BathOffIcon({
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
      <path d="M16 12h4a1 1 0 0 1 1 1v3q-.001.468-.103.904m-1.61 2.378A4 4 0 0 1 17 20H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1h8m-6 0V6m1.178-2.824C7.43 3.063 7.708 3 8 3h3v2.25M4 21l1-1.5M20 21l-1-1.5M3 3l18 18"/>
    </svg>
  );
}
