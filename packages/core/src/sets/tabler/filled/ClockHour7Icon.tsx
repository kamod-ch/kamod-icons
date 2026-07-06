import type { IconProps } from "../../../shared/types";

export function ClockHour7Icon({
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
      <path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-4.007 8.777L13 12V7a1 1 0 0 0-2 0v4.696l-1.832 2.75a1 1 0 0 0 .184 1.316l.093.07a1 1 0 0 0 1.387-.277l2.024-3.038.06-.116.032-.081.03-.109z"/>
    </svg>
  );
}
