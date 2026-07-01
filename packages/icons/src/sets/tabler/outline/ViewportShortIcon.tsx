import type { IconProps } from "../../../shared/types";

export function ViewportShortIcon({
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
      <path d="M12 3v7l3-3M9 7l3 3m0 11v-7l3 3m-6 0 3-3m6-5h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1M6 9H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1"/>
    </svg>
  );
}
