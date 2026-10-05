import type { IconProps } from "../../shared/types";

export function MarginalRoiIcon({
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
      <path d="M5 10v9m6-6v6m6-3v3M3 21.5h18M9 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
