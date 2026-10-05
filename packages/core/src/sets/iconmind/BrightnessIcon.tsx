import type { IconProps } from "../../shared/types";

export function BrightnessIcon({
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
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4-9v3m0 12v3m-9-9h3m12 0h3"/>
    </svg>
  );
}
