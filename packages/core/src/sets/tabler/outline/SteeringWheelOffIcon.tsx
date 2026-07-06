import type { IconProps } from "../../../shared/types";

export function SteeringWheelOffIcon({
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
      <path d="M20.04 16.048A9 9 0 0 0 7.957 3.958m-2.32 1.678a9 9 0 1 0 12.737 12.719"/><path d="M10.595 10.576a2 2 0 1 0 2.827 2.83M12 14v7m-2-9-6.75-2m12.292 1.543L20.75 10M3 3l18 18"/>
    </svg>
  );
}
