import type { IconProps } from "../../shared/types";

export function BacteriaIcon({
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
      <path d="m5 14 6-6a4 4 0 0 1 6 6l-6 6a4 4 0 0 1-6-6m12-3 4-4M8 17l-4 4"/>
    </svg>
  );
}
