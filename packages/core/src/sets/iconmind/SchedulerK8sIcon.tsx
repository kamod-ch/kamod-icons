import type { IconProps } from "../../shared/types";

export function SchedulerK8sIcon({
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
      <path d="M12 3v3.5M9.5 4 12 6.5 14.5 4M10 11.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8 6h20"/>
    </svg>
  );
}
