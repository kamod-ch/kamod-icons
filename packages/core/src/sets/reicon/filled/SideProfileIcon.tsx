import type { IconProps } from "../../../shared/types";

export function SideProfileIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" strokeWidth="1.333" d="m22.8 12.4-1.805-2.408a8.97 8.97 0 0 0-3.32-6.645c-2.116-1.719-4.887-2.378-7.602-1.812-3.4.71-6.16 3.469-6.872 6.868-.798 3.824.852 7.6 4.132 9.588v3.674a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1v-2.333h1.187a3.677 3.677 0 0 0 3.656-3.401l.104-1.434 1.424-.569a1 1 0 0 0 .59-.659 1 1 0 0 0-.162-.87Zm-6.133-1.733a1.334 1.334 0 1 1 0-2.668 1.334 1.334 0 0 1 0 2.668Z"/>
    </svg>
  );
}
