import type { IconProps } from "../../shared/types";

export function RocketIcon({
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
      <path d="m12 2 4 4v11H8V6Z"/><path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-2 3-5 5h5m8-5 5 5h-5m-7 0 3 3 3-3"/>
    </svg>
  );
}
