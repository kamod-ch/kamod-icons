import type { IconProps } from "../../../shared/types";

export function ArrowZigZagIcon({
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
      <path d="M6 20V10l10 6V4"/><path d="m13 7 3-3 3 3"/>
    </svg>
  );
}
