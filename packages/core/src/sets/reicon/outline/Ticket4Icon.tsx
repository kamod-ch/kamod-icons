import type { IconProps } from "../../../shared/types";

export function Ticket4Icon({
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
      <g transform="scale(1.33333)"><circle cx="6.75" cy="7.563" r=".75" fill="currentColor"/><circle cx="6.75" cy="10.437" r=".75" fill="currentColor"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 3.75h-6a1.5 1.5 0 0 1-3 0h-1.5a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2h1.5a1.5 1.5 0 0 1 3 0h6a2 2 0 0 0 2-2v-6.5a2 2 0 0 0-2-2"/></g>
    </svg>
  );
}
