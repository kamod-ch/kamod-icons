import type { IconProps } from "../../shared/types";

export function ConfidenceIntervalIcon({
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
      <path d="M5 8v8m0-4h14m0-4v8m-9-4a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
