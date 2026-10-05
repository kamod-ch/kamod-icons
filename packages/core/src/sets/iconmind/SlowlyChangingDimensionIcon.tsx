import type { IconProps } from "../../shared/types";

export function SlowlyChangingDimensionIcon({
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
      <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5 2.5 2.5 0 0 1 19.5 7h-15A2.5 2.5 0 0 1 2 4.5M2 12a2.5 2.5 0 0 1 2.5-2.5h15A2.5 2.5 0 0 1 22 12a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 12m0 7.5A2.5 2.5 0 0 1 4.5 17h15a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5"/><path d="M5 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
