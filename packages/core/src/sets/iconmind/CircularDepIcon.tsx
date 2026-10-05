import type { IconProps } from "../../shared/types";

export function CircularDepIcon({
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
      <path d="M14.39 5.42a7 7 0 0 1 0 13.16m-4.78 0a7 7 0 0 1 0-13.16"/><path d="m12 2 3 3-3 3m0 8-3 3 3 3"/>
    </svg>
  );
}
