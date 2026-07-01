import type { IconProps } from "../../../shared/types";

export function ChartDots2Icon({
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
      <path d="M3 3v18h18"/><path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4-10a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5-9-6 1.5m-.887 2.15 2.771 3.695M16 12.5l-5 2"/>
    </svg>
  );
}
