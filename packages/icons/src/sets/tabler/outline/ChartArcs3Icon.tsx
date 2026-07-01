import type { IconProps } from "../../../shared/types";

export function ChartArcs3Icon({
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
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M7 12a5 5 0 1 0 5-5"/><path d="M6.29 18.957A9 9 0 1 0 12 3"/>
    </svg>
  );
}
