import type { IconProps } from "../../../shared/types";

export function ArrowLeftTailIcon({
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
      <path d="M18 12H3m3-3-3 3 3 3m15-6-3 3 3 3"/>
    </svg>
  );
}
