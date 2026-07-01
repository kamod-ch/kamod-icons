import type { IconProps } from "../../../shared/types";

export function Loft3dIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 17c-9 0-11 6-20 6M22 1C13 1 11 7 2 7m10 9.5v-9m0 9 2.5-2.5M12 16.5 9.5 14M12 7.5l2.5 2.5M12 7.5 9.5 10"/>
    </svg>
  );
}
