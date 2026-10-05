import type { IconProps } from "../../shared/types";

export function TabGroupIcon({
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
      <path d="M2 16V9l2-2h4l2 2v7m4 0V9l2-2h4l2 2v7M2 16h20M4 19.5h16"/>
    </svg>
  );
}
