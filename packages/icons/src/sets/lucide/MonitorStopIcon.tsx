import type { IconProps } from "../../shared/types";

export function MonitorStopIcon({
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
      <path d="M12 17v4m-4 0h8"/><rect x="2" y="3" rx="2"/><rect x="9" y="7" rx="1"/>
    </svg>
  );
}
