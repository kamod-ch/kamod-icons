import type { IconProps } from "../../shared/types";

export function FulfilmentCentreIcon({
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
      <path d="M2 20V10l3-3h14l3 3v10M8 14h8"/><path d="M13.5 11.5 16 14l-2.5 2.5"/>
    </svg>
  );
}
