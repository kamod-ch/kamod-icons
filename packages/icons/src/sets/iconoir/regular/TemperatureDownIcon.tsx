import type { IconProps } from "../../../shared/types";

export function TemperatureDownIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 12a5 5 0 1 0 6 0m-6 0V3h6v9m0-9h2m-2 3h2m-2 3h2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6m11 0v12m0 0 2.5-2.5M19 18l-2.5-2.5"/>
    </svg>
  );
}
