import type { IconProps } from "../../shared/types";

export function TrafficLightIcon({
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
      <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm6 14v4"/><path d="M10 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M10 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
