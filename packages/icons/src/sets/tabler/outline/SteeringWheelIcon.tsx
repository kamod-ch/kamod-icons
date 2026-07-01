import type { IconProps } from "../../../shared/types";

export function SteeringWheelIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v7m-2-9-6.75-2M14 12l6.75-2"/>
    </svg>
  );
}
