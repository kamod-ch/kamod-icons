import type { IconProps } from "../../shared/types";

export function ControllerVibrateIcon({
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
      <path d="M8 9h8c2 0 3 2 3 5 0 2-1 3.5-2.5 3.5s-2.5-2-4.5-2-3 2-4.5 2S5 16 5 14c0-3 1-5 3-5M3 5v4m18-4v4"/>
    </svg>
  );
}
