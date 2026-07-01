import type { IconProps } from "../../shared/types";

export function IterationCwIcon({
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
      <path d="M4 10a8 8 0 1 1 8 8H4"/><path d="m8 22-4-4 4-4"/>
    </svg>
  );
}
