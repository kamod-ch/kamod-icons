import type { IconProps } from "../../../shared/types";

export function Grid4x4Icon({
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
      <path d="M3 6h18M3 12h18M3 18h18M6 3v18m6-18v18m6-18v18"/>
    </svg>
  );
}
