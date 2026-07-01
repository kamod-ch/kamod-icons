import type { IconProps } from "../../../shared/types";

export function Filter2ShareIcon({
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
      <path d="M4 6h16M6 12h12m-9 6h3.5m3.5 4 5-5m0 0v4.5m0-4.5h-4.5"/>
    </svg>
  );
}
