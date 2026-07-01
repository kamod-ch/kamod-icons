import type { IconProps } from "../../../shared/types";

export function StackPushIcon({
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
      <path d="m6 10-2 1 8 4 8-4-2-1M4 15l8 4 8-4M12 4v7"/><path d="m15 8-3 3-3-3"/>
    </svg>
  );
}
