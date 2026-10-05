import type { IconProps } from "../../shared/types";

export function PingHostIcon({
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
      <path d="M15.5 8a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2ZM4 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3-3.46a4 4 0 0 1 0 6.92"/><path d="M8.5 5.94a7 7 0 0 1 0 12.12M12 12h3.5"/>
    </svg>
  );
}
