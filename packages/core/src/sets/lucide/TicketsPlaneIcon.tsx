import type { IconProps } from "../../shared/types";

export function TicketsPlaneIcon({
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
      <path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12m-6 1.5 3.794.506M3.173 8.18l11-5a2 2 0 0 1 2.647.993L18.56 8M6 10V8m0 6v1m0 4v2"/><rect x="2" y="8" rx="2"/>
    </svg>
  );
}
