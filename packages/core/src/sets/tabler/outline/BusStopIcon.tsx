import type { IconProps } from "../../../shared/types";

export function BusStopIcon({
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
      <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm13 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2m-4 0H8"/><path d="m16 5 1.5 7H22M9.5 10H17m-5-5v5M5 9v11"/>
    </svg>
  );
}
