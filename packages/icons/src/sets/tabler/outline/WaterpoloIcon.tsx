import type { IconProps } from "../../../shared/types";

export function WaterpoloIcon({
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
      <path d="m5 8 3 4 5 1 7-1M3 18.75A2.4 2.4 0 0 0 4 19a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 1-.25M12 16l1-3"/><path d="M11.007 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6-5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/>
    </svg>
  );
}
