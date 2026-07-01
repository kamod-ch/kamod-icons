import type { IconProps } from "../../../shared/types";

export function TrafficLightsOffIcon({
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
      <path d="M8 4c.912-1.219 2.36-2 4-2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1-10 0V7"/><path d="M12 8a1 1 0 1 0-1-1m.291 4.295a1 1 0 0 0 1.418 1.41M11 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18"/>
    </svg>
  );
}
