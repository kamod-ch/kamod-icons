import type { IconProps } from "../../shared/types";

export function MeasuringJugIcon({
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
      <path d="M5 6v14h10V6m0 1 3-3m-3 6c4 0 4 6 0 6m-9-4h4m-4 4h4"/>
    </svg>
  );
}
