import type { IconProps } from "../../../shared/types";

export function SunElectricityIcon({
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
      <path d="M8 12a4 4 0 0 0 4 4m0-8a4 4 0 0 0-4 4m-5 0h1m8-9v1m0 16v1M5.6 5.6l.7.7m0 11.4-.7.7M20 7l-3 5h4l-3 5"/>
    </svg>
  );
}
