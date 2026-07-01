import type { IconProps } from "../../../shared/types";

export function SprayIcon({
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
      <path d="M4 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-2V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4m5-3h.01M18 9h.01M18 5h.01M21 3h.01M21 7h.01M21 11h.01M10 7h1"/>
    </svg>
  );
}
