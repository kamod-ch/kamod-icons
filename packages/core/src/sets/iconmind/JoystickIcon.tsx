import type { IconProps } from "../../shared/types";

export function JoystickIcon({
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
      <path d="M5 20a7 7 0 0 1 14 0M12 6v7m-2-9a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
