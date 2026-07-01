import type { IconProps } from "../../../shared/types";

export function CircleChevronLeftIcon({
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
      <path d="m13 15-3-3 3-3"/><path d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0"/>
    </svg>
  );
}
