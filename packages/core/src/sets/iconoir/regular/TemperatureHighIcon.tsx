import type { IconProps } from "../../../shared/types";

export function TemperatureHighIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12a5 5 0 1 0 6 0m-6 0V3h6v9m0-9h2m-2 3h2m-2 3h2m5-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6"/>
    </svg>
  );
}
