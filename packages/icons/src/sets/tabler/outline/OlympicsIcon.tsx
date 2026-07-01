import type { IconProps } from "../../../shared/types";

export function OlympicsIcon({
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
      <path d="M3 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0m12 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M6 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0m6 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
