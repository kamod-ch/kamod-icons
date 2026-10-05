import type { IconProps } from "../../shared/types";

export function DarkroomIcon({
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
      <path d="M2 4h20M7 4v14h10V4"/><path d="m9 14 3-3 3 3m-5-6a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
