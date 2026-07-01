import type { IconProps } from "../../shared/types";

export function TicketsIcon({
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
      <path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8M6 10V8m0 6v1m0 4v2"/><rect x="2" y="8" rx="2"/>
    </svg>
  );
}
