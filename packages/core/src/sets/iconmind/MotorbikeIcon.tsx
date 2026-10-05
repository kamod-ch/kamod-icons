import type { IconProps } from "../../shared/types";

export function MotorbikeIcon({
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
      <path d="M2 14.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m13 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0"/><path d="M5.5 14.5 9 11h6l3.5 3.5m-9-3.5 3-3h4"/>
    </svg>
  );
}
