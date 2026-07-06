import type { IconProps } from "../../../shared/types";

export function ArrowsDoubleSeNwIcon({
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
      <path d="m3 10 11 11m0-4v4h-4m4-18h-4v4m11 7L10 3"/>
    </svg>
  );
}
