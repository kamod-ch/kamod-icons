import type { IconProps } from "../../../shared/types";

export function CandleIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M9 21h6V11a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm3-19 1.465 1.638a2 2 0 1 1-3.015.099z"/>
    </svg>
  );
}
