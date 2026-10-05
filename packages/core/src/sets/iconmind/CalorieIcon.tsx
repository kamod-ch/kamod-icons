import type { IconProps } from "../../shared/types";

export function CalorieIcon({
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
      <path d="M12 3c1.5 3 4 4 4 7a4 4 0 1 1-8 0c0-2.5 2-3 2-4.5.5 1 2 1 2-2.5M4 16h16m-2 0a6 6 0 0 1-12 0"/>
    </svg>
  );
}
