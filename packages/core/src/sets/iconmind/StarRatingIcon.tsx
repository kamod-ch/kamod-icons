import type { IconProps } from "../../shared/types";

export function StarRatingIcon({
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
      <path d="m6.5 8 2 2-2 2-2-2ZM12 8l2 2-2 2-2-2Zm5.5 0 2 2-2 2-2-2ZM4 16h16"/>
    </svg>
  );
}
