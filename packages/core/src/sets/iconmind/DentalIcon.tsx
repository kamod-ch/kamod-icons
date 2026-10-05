import type { IconProps } from "../../shared/types";

export function DentalIcon({
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
      <path d="M4 6a4 4 0 0 1 5 2 4 4 0 0 1 5-2c2 4 0 13-2.5 13C10 19 10 13 9 13s-1 6-2.5 6C4 19 2 10 4 6m12 9 2 2 4-4"/>
    </svg>
  );
}
