import type { IconProps } from "../../shared/types";

export function HandleIcon({
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
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M15 12v3c0 2 3 2 4 0 2-4-1-11-7-11-5 0-9 4-9 8s4 8 9 8c2 0 3-.5 4-1"/>
    </svg>
  );
}
