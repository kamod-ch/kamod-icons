import type { IconProps } from "../../shared/types";

export function MonitorOffIcon({
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
      <path d="M12 17v4m5-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826M2 2l20 20M8 21h8M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042"/>
    </svg>
  );
}
