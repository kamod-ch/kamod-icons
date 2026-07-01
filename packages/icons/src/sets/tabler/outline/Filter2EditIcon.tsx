import type { IconProps } from "../../../shared/types";

export function Filter2EditIcon({
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
      <path d="M4 6h16M6 12h11m-8 6h2m7.42-2.39a2.1 2.1 0 0 1 1.485-.615 2.1 2.1 0 0 1 1.485.615 2.1 2.1 0 0 1 0 2.97L18 22h-3v-3z"/>
    </svg>
  );
}
