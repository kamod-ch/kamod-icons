import type { IconProps } from "../../shared/types";

export function WateringCanIcon({
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
      <path d="M6 10v10h10V10Zm10 2 5-5m-2-2 3 3M8 10c0-4 6-4 6 0"/>
    </svg>
  );
}
