import type { IconProps } from "../../shared/types";

export function TemperatureRangeIcon({
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
      <path d="M9.5 15V6a2.5 2.5 0 0 1 5 0v9a4.5 4.5 0 1 1-5 0"/><path d="M10 17.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 8v7m3-7h4m-4 5h4"/>
    </svg>
  );
}
