import type { IconProps } from "../../shared/types";

export function GamepadIcon({
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
      <path d="M2 12a5.5 5.5 0 0 1 5.5-5.5h9A5.5 5.5 0 0 1 22 12a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 12m5-2.5v5M4.5 12h5"/><path d="M15 10.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
