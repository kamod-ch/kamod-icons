import type { IconProps } from "../../../shared/types";

export function MouseIcon({
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
      <path d="M14 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm-2 4a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 13 11V7l-.007-.117A1 1 0 0 0 12 6"/>
    </svg>
  );
}
