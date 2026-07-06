import type { IconProps } from "../../../shared/types";

export function MathXDivideYIcon({
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
      <path d="m9 3 6 6M9 9l6-6M9 15l3 4.5m3-4.5-4.5 7M5 12h14"/>
    </svg>
  );
}
