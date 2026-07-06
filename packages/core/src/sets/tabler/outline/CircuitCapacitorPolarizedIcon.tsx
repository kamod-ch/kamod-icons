import type { IconProps } from "../../../shared/types";

export function CircuitCapacitorPolarizedIcon({
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
      <path d="M22 12h-8M2 12h8m0-5v10m4-10v10m3-12h4m-2-2v4"/>
    </svg>
  );
}
