import type { IconProps } from "../../../shared/types";

export function Rotation360Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><circle cx="9" cy="9" r="1.75"/><path d="M10.503 16.05A2.83 2.83 0 0 1 9 16.5c-2.428 0-4.397-3.358-4.397-7.5S6.572 1.5 9 1.5s4.397 3.358 4.397 7.5c0 1.384-.22 2.681-.603 3.793"/><path d="M8.574 4.61q.21-.006.426-.006c4.142 0 7.5 1.968 7.5 4.397s-3.358 4.397-7.5 4.397S1.5 11.428 1.5 9c0-1.617 1.489-3.03 3.707-3.794"/></g>
    </svg>
  );
}
