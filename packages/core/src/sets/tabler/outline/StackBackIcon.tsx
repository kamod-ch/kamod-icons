import type { IconProps } from "../../../shared/types";

export function StackBackIcon({
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
      <path d="m4 8 8 4 8-4-8-4z"/><path fill="currentColor" d="m12 16-4-2-4 2 8 4 8-4-4-2z"/><path d="m8 10-4 2 4 2m8 0 4-2-4-2"/>
    </svg>
  );
}
