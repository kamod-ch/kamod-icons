import type { IconProps } from "../../../shared/types";

export function ArrowUpLeft2Icon({
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
      <path fill="currentColor" d="M5 4a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V7.414l12.293 12.293a1 1 0 0 0 1.414-1.414L7.414 6H13a1 1 0 1 0 0-2z"/>
    </svg>
  );
}
