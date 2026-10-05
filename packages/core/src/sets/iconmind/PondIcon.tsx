import type { IconProps } from "../../shared/types";

export function PondIcon({
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
      <path d="M12 7c5 0 9 2 9 6s-4 6-9 6-9-2-9-6 4-6 9-6"/><path d="M8 15c2-2 6-2 8 0"/>
    </svg>
  );
}
