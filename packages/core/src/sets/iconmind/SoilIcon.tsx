import type { IconProps } from "../../shared/types";

export function SoilIcon({
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
      <path d="M2 11h20M2 16h20M2 21h20M9 4v7m1-2c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6"/>
    </svg>
  );
}
