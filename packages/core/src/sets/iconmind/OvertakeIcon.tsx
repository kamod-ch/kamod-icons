import type { IconProps } from "../../shared/types";

export function OvertakeIcon({
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
      <path d="M3 2v20M21 2v20M9 8v12m-2.5-9.5L9 8l2.5 2.5M15 4v12m-2.5-9.5L15 4l2.5 2.5"/>
    </svg>
  );
}
