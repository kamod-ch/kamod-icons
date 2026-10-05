import type { IconProps } from "../../shared/types";

export function MagneticFieldIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M8 10h8v4H8Z"/><path d="M3 13c0-9 18-9 18 0"/><path d="M3 11c0 9 18 9 18 0"/>
    </svg>
  );
}
