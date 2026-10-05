import type { IconProps } from "../../shared/types";

export function UmbrellaIcon({
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
      <path d="M3 12a9 9 0 0 1 18 0M3 12h18M9 12a3 3 0 0 1-6 0m12 0a3 3 0 0 1-6 0m12 0a3 3 0 0 1-6 0m-3 3v6"/>
    </svg>
  );
}
