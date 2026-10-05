import type { IconProps } from "../../shared/types";

export function TraceSpanIcon({
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
      <path d="M4 3v18M7 7a1.5 1.5 0 0 1 1.5-1.5h10A1.5 1.5 0 0 1 20 7a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 7 7m3 6a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 22 13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 10 13m-3 6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 14 19a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 7 19"/>
    </svg>
  );
}
