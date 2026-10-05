import type { IconProps } from "../../shared/types";

export function GetTogetherIcon({
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
      <path d="M12 14c5 0 9 1.5 9 3.5S17 21 12 21s-9-1.5-9-3.5S7 14 12 14M4 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6-2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6 2a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
