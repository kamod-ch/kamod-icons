import type { IconProps } from "../../../shared/types";

export function ScissorsIcon({
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
      <path d="M3 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m0 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.6-8.4L19 19M8.6 15.4 19 5"/>
    </svg>
  );
}
