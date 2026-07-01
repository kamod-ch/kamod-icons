import type { IconProps } from "../../../shared/types";

export function ArrowRotaryLastRightIcon({
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
      <path d="M6 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v6m2.5-11.5L18 3m-5 0h5v5"/>
    </svg>
  );
}
