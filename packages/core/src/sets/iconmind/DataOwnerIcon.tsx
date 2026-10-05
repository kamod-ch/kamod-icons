import type { IconProps } from "../../shared/types";

export function DataOwnerIcon({
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
      <path d="M3 5a5 2.5 0 0 1 10 0v8a5 2.5 0 0 1-10 0Z"/><path d="M3 5a5 2.5 0 0 0 10 0m2 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-2 9a4 4 0 0 1 8 0"/>
    </svg>
  );
}
