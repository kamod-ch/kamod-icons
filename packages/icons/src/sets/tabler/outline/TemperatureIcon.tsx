import type { IconProps } from "../../../shared/types";

export function TemperatureIcon({
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
      <path d="M10 13.5a4 4 0 1 0 4 0V5a2 2 0 0 0-4 0zM10 9h4"/>
    </svg>
  );
}
