import type { IconProps } from "../../../shared/types";

export function XPowerYIcon({
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
      <path d="m15 3 3 5.063M5 12l6 6m-6 0 6-6m10-9-4.8 9"/>
    </svg>
  );
}
