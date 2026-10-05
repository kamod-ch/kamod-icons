import type { IconProps } from "../../shared/types";

export function AtomicOpIcon({
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
      <path d="M7.5 4H5v16h2.5m9-16H19v16h-2.5M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
