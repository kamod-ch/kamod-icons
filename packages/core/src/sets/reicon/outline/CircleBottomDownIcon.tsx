import type { IconProps } from "../../../shared/types";

export function CircleBottomDownIcon({
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
      <path fill="currentColor" d="M2.75 12A9.25 9.25 0 1 1 12 21.25a.75.75 0 0 0 0 1.5c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12a.75.75 0 0 0 1.5 0Z"/><path fill="currentColor" d="M8 22.75a.75.75 0 0 0 0-1.5H3.81l6.72-6.72a.75.75 0 1 0-1.06-1.06l-6.72 6.72V16a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75z"/>
    </svg>
  );
}
