import type { IconProps } from "../../shared/types";

export function IterationCcwIcon({
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
      <path d="m16 14 4 4-4 4"/><path d="M20 10a8 8 0 1 0-8 8h8"/>
    </svg>
  );
}
