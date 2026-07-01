import type { IconProps } from "../../shared/types";

export function MonitorIcon({
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
      <rect x="2" y="3" rx="2"/><path d="M8 21h8m-4-4v4"/>
    </svg>
  );
}
