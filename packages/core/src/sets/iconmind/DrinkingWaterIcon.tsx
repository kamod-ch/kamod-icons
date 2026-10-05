import type { IconProps } from "../../shared/types";

export function DrinkingWaterIcon({
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
      <path d="M7 5v16h10V5Z"/><path d="m12 9 3 3a3 3 0 0 1-6 0ZM7 9h10"/>
    </svg>
  );
}
