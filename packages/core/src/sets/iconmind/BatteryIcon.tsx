import type { IconProps } from "../../shared/types";

export function BatteryIcon({
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
      <path d="M2 9a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm18 1v4"/><path d="M5 12a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 2 2 0 0 1-2 2H7a2 2 0 0 1-2-2"/>
    </svg>
  );
}
