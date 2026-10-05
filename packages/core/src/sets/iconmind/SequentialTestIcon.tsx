import type { IconProps } from "../../shared/types";

export function SequentialTestIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m3 8 2 2 3-3m2 1 2 2 3-3m2.5 0 3.5 3.5M21 7l-3.5 3.5M3 16.5h18"/>
    </svg>
  );
}
