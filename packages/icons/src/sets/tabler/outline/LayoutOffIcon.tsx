import type { IconProps } from "../../../shared/types";

export function LayoutOffIcon({
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
      <path d="M8 4a2 2 0 0 1 2 2M8.838 8.816A2 2 0 0 1 8 9H6a2 2 0 0 1-2-2V6c0-.549.221-1.046.58-1.407M4 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10-5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-.595 3.423A2 2 0 0 1 18 20h-2a2 2 0 0 1-2-2v-4M3 3l18 18"/>
    </svg>
  );
}
