import type { IconProps } from "../../../shared/types";

export function WalkIcon({
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
      <path d="M12 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 21l3-4m6 4-2-4-3-3 1-6"/><path d="m6 12 2-3 4-1 3 3 3 1"/>
    </svg>
  );
}
