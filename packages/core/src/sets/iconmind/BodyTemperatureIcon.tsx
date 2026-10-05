import type { IconProps } from "../../shared/types";

export function BodyTemperatureIcon({
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
      <path d="M9 4v11m-3 3a3 3 0 1 0 6 0 3 3 0 1 0-6 0m9-11a3 3 0 0 1 0 6"/><path d="M15 4a6 6 0 0 1 0 12"/>
    </svg>
  );
}
