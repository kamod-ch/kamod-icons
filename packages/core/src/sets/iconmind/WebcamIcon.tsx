import type { IconProps } from "../../shared/types";

export function WebcamIcon({
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
      <path d="M7 10a5 5 0 1 0 10 0 5 5 0 1 0-10 0"/><path d="M10 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 5v4m-4 0h8"/>
    </svg>
  );
}
