import type { IconProps } from "../../shared/types";

export function TrebleClefIcon({
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
      <path d="M12 21c-2 0-3-2-3-4 0-4 6-7 6-11 0-2-2-3-3-2-2 1-2 4-1 7 1 4 3 6 3 8"/><path d="M9 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
