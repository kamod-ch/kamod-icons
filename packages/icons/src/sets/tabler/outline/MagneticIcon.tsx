import type { IconProps } from "../../../shared/types";

export function MagneticIcon({
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
      <path d="M12 3v18m6-14c-.633-1.255-1.538-2-2.5-2-1.933 0-3.5 3.134-3.5 7s1.567 7 3.5 7 3.5-3.134 3.5-7v-1M6 7c.633-1.255 1.538-2 2.5-2 1.933 0 3.5 3.134 3.5 7s-1.567 7-3.5 7S5 15.866 5 12v-1"/><path d="m3 13 2-2 2 2m10 0 2-2 2 2"/>
    </svg>
  );
}
