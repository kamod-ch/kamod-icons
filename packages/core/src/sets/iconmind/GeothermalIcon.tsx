import type { IconProps } from "../../shared/types";

export function GeothermalIcon({
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
      <path d="M2 14h20M8 12a2.5 2.5 0 0 1 0-5m0-5a2.5 2.5 0 0 1 0 5m8 5a2.5 2.5 0 0 1 0-5m0-5a2.5 2.5 0 0 1 0 5M6 20h12"/>
    </svg>
  );
}
