import type { IconProps } from "../../../shared/types";

export function BackwardIcon({
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
      <path fill="currentColor" d="M9.189 5.39c1.39-.987 3.315.008 3.315 1.713v3.03l6.685-4.743c1.39-.987 3.315.008 3.315 1.713v9.796c0 1.705-1.925 2.7-3.315 1.713l-6.685-4.742v3.03c0 1.704-1.925 2.699-3.315 1.712l-6.733-4.776a2.25 2.25 0 0 1 0-3.67z"/>
    </svg>
  );
}
