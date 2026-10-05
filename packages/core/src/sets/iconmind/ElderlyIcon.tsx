import type { IconProps } from "../../shared/types";

export function ElderlyIcon({
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
      <path d="M6 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v6m-5 6 5-5 5 5m4 0V9a2 2 0 0 0-4 0"/>
    </svg>
  );
}
