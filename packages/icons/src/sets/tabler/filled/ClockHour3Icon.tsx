import type { IconProps } from "../../../shared/types";

export function ClockHour3Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 0-2H13V7a1 1 0 0 0-.883-.993z"/>
    </svg>
  );
}
