import type { IconProps } from "../../../shared/types";

export function Chart4Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 22h18M5.6 8.38H4c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V9.38c0-.55-.45-1-1-1m7.2-3.19h-1.6c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.19c0-.55-.45-1-1-1M20 2h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1"/>
    </svg>
  );
}
