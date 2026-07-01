import type { IconProps } from "../../shared/types";

export function DoorClosedLockedIcon({
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
      <path d="M10 12h.01M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14m-4 0h8m10-3v-2a2 2 0 1 0-4 0v2"/><rect x="14" y="17" rx="1"/>
    </svg>
  );
}
