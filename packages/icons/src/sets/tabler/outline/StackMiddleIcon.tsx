import type { IconProps } from "../../../shared/types";

export function StackMiddleIcon({
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
      <path d="m16 10 4-2-8-4-8 4 4 2"/><path fill="currentColor" d="m12 12-4-2-4 2 8 4 8-4-4-2z"/><path d="m8 14-4 2 8 4 8-4-4-2"/>
    </svg>
  );
}
