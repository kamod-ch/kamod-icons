import type { IconProps } from "../../shared/types";

export function LogitLensIcon({
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
      <path d="M5 13v5m4-9v9m4-7v7m0-11a4 4 0 1 0 8 0 4 4 0 1 0-8 0m7 3 2 2"/>
    </svg>
  );
}
