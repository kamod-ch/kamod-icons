import type { IconProps } from "../../shared/types";

export function TwoPhaseIcon({
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
      <path d="m5 8 2 2 3.5-3.5M5 16l2 2 3.5-3.5m5-9.5H18v14h-2.5"/>
    </svg>
  );
}
