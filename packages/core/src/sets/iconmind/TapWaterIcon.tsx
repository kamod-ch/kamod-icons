import type { IconProps } from "../../shared/types";

export function TapWaterIcon({
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
      <path d="M4 6h8v6h4M9 3v3M6 3h6m4 10 3 3a3 3 0 0 1-6 0Z"/>
    </svg>
  );
}
