import type { IconProps } from "../../../shared/types";

export function SportBillardIcon({
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
      <path d="M10 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0"/>
    </svg>
  );
}
