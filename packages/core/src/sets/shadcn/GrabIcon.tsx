import type { IconProps } from "../../shared/types";

export function GrabIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 11.5V9a2 2 0 1 0-4 0v1.4m0-.4V8a2 2 0 1 0-4 0v2m0-.1V9a2 2 0 1 0-4 0v5m0 0a2 2 0 0 0-4 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 0 1 4 0"/>
    </svg>
  );
}
