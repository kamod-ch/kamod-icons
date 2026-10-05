import type { IconProps } from "../../shared/types";

export function VitaminIcon({
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
      <path d="m4 13 6-6a4 4 0 0 1 5 5l-6 6a4 4 0 0 1-5-5m15-9v6m-3-3h6"/>
    </svg>
  );
}
