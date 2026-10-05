import type { IconProps } from "../../shared/types";

export function TrafficJamIcon({
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
      <path d="M3.5 2v20m17-20v20M7.5 5.5 10 3h4l2.5 2.5V8h-9Zm0 10L10 13h4l2.5 2.5V18h-9Z"/>
    </svg>
  );
}
