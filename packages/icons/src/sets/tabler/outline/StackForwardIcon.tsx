import type { IconProps } from "../../../shared/types";

export function StackForwardIcon({
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
      <path fill="currentColor" d="M12 5 4 9l8 4 8-4z"/><path d="m10 12-6 3 8 4 8-4-6-3"/>
    </svg>
  );
}
