import type { IconProps } from "../../shared/types";

export function MeasuringCupIcon({
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
      <path d="M5 6v13h12V6M6 11h6m-6 4h6m5-6a3 3 0 0 1 0 6"/>
    </svg>
  );
}
