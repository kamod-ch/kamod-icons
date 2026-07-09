import type { IconProps } from "../../../shared/types";

export function CircleHashtagIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><circle cx="9" cy="9" r="7.25"/><path d="m8.125 5-1.5 8m4.75-8-1.5 8M5 10.75h7.25m-6.5-3.5H13"/></g>
    </svg>
  );
}
