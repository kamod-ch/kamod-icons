import type { IconProps } from "../../shared/types";

export function MonitorXIcon({
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
      <path d="m14.5 12.5-5-5m0 5 5-5"/><rect x="2" y="3" rx="2"/><path d="M12 17v4m-4 0h8"/>
    </svg>
  );
}
