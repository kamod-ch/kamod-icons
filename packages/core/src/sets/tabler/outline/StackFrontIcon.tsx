import type { IconProps } from "../../../shared/types";

export function StackFrontIcon({
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
      <path fill="currentColor" d="M12 4 4 8l8 4 8-4z"/><path d="m8 14-4 2 8 4 8-4-4-2"/><path d="m8 10-4 2 8 4 8-4-4-2"/>
    </svg>
  );
}
