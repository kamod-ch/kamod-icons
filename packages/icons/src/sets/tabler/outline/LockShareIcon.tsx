import type { IconProps } from "../../../shared/types";

export function LockShareIcon({
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
      <path d="M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M12 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M8 11V7a4 4 0 1 1 8 0v4m0 11 5-5m0 4.5V17h-4.5"/>
    </svg>
  );
}
