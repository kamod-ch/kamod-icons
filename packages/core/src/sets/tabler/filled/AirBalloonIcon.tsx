import type { IconProps } from "../../../shared/types";

export function AirBalloonIcon({
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
      <path d="M13 18a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zM12 1a7 7 0 0 1 7 7c0 4.185-3.297 9-7 9s-7-4.815-7-9a7 7 0 0 1 7-7"/>
    </svg>
  );
}
