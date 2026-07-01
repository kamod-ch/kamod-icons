import type { IconProps } from "../../../shared/types";

export function FerryIcon({
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
      <path d="M2 18h15.293c1.02 0 1.972-.503 2.536-1.34L22 13H3.521zM14 8l-1-2m-6.893 6.675L7.491 8h8l2.675 4.598"/>
    </svg>
  );
}
