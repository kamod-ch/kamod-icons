import type { IconProps } from "../../shared/types";

export function RaceDetectIcon({
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
      <path d="m3 5 7 7m-7 7 7-7m1.5 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0"/>
    </svg>
  );
}
