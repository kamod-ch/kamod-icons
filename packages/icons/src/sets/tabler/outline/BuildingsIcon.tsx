import type { IconProps } from "../../../shared/types";

export function BuildingsIcon({
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
      <path d="M4 21V6c0-1 1-2 2-2h5c1 0 2 1 2 2v15m3-13h2c1 0 2 1 2 2v11M3 21h18m-11-9v.01M10 16v.01M10 8v.01M7 12v.01M7 16v.01M7 8v.01M17 12v.01M17 16v.01"/>
    </svg>
  );
}
