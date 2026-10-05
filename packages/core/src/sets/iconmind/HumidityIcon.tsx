import type { IconProps } from "../../shared/types";

export function HumidityIcon({
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
      <path d="m8 7 2.5 2.5a2.5 2.5 0 0 1-5 0Zm6.5 7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M15 19l6-6m-1.5 5.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
