import type { IconProps } from "../../../shared/types";

export function ArrowsDownUpIcon({
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
      <path d="M17 3v18m-7-3-3 3-3-3m3 3V3m13 3-3-3-3 3"/>
    </svg>
  );
}
