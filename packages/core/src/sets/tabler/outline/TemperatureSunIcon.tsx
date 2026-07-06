import type { IconProps } from "../../../shared/types";

export function TemperatureSunIcon({
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
      <path d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4m5 7a4 4 0 1 0 0-8 4 4 0 0 0-1 .124M13 3v1m8 8h1m-9 8v1m6.4-15.4-.7.7m0 11.4.7.7"/>
    </svg>
  );
}
