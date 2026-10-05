import type { IconProps } from "../../shared/types";

export function BabyIcon({
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
      <path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0"/><path d="M12 4c3 0 3 3 0 3m-4 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
