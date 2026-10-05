import type { IconProps } from "../../shared/types";

export function StudentIcon({
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
      <path d="m4 7 3-3h10l3 3-3 3H7Zm5 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M7.5 21a4.5 4.5 0 0 1 9 0"/>
    </svg>
  );
}
