import type { IconProps } from "../../shared/types";

export function SmokeDetectorIcon({
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
      <path d="M4 3h16M5 6h14v5a7 7 0 0 1-14 0Z"/><path d="M11 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-2 6h6m-3 0v4"/>
    </svg>
  );
}
