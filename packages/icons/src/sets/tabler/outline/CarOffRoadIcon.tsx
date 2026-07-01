import type { IconProps } from "../../../shared/types";

export function CarOffRoadIcon({
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
      <path d="M9 17h6m-6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2-7-2-3"/><path d="M19 17h2v-5a2 2 0 0 0-2-2h-5v2h-2.586a1 1 0 0 1-.707-.293l-1.121-1.121A2 2 0 0 0 8.172 10H4a1 1 0 0 0-1 1v6h2"/>
    </svg>
  );
}
