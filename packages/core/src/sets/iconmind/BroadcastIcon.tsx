import type { IconProps } from "../../shared/types";

export function BroadcastIcon({
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
      <path d="M12 12v9m-5 0h10M8.24 8.63a4 4 0 0 1 7.5 0"/><path d="M5.42 7.61a7 7 0 0 1 13.16 0"/>
    </svg>
  );
}
