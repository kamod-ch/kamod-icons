import type { IconProps } from "../../shared/types";

export function ChartRadialIcon({
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
      <path d="M12 8a4 4 0 0 1 0 8"/><path d="M12 5a7 7 0 1 1-7 7"/><path d="M12 2a10 10 0 1 1-7.07 2.93"/>
    </svg>
  );
}
