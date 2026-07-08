import type { IconProps } from "../../../shared/types";

export function Radio4Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 5H7c-3 0-5 2-5 5v7c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5M7 2v3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m6-5h4m-4 4h.5m3 0h.5"/>
    </svg>
  );
}
