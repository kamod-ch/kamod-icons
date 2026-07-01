import type { IconProps } from "../../../shared/types";

export function HammerDrillIcon({
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
      <path d="M12 15v6m4-16h4M8 5H4m11 6H9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m-1 0h-4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"/>
    </svg>
  );
}
