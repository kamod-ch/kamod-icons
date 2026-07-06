import type { IconProps } from "../../../shared/types";

export function CircuitMotorIcon({
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
      <path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0m0 0H2m17 0h3"/><path d="M10 14v-4l2 2 2-2v4"/>
    </svg>
  );
}
