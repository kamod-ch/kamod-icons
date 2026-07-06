import type { IconProps } from "../../shared/types";

export function ZodiacScorpioIcon({
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
      <path d="M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3m3 3-3 3M5 19V5.5a1 1 0 0 1 5 0m-5 0A2.5 2.5 0 0 0 2.5 3"/>
    </svg>
  );
}
