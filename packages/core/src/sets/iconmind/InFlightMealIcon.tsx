import type { IconProps } from "../../shared/types";

export function InFlightMealIcon({
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
      <path d="M2 15h20M2.5 15a6.5 6.5 0 0 1 13 0m0 0V8H21v7M4 18h16"/>
    </svg>
  );
}
