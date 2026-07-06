import type { IconProps } from "../../shared/types";

export function Mic2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>
    </svg>
  );
}
