import type { IconProps } from "../../shared/types";

export function ActionStepIcon({
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
      <path d="M2 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m7.5 4.5L16 16m4 .5V20h-3.5"/>
    </svg>
  );
}
