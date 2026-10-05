import type { IconProps } from "../../shared/types";

export function PregnancyIcon({
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
      <path d="M6 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v10m0-8c6 0 8 2 8 5 0 2-3 3-8 3m0 0-3 3m3-3 3 3"/>
    </svg>
  );
}
