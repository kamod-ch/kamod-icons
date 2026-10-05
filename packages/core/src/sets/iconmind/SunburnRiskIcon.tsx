import type { IconProps } from "../../shared/types";

export function SunburnRiskIcon({
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
      <path d="M8.5 7a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m-3 0H8m8 0h2.5M5 20a7 7 0 0 1 14 0M5 20h14"/>
    </svg>
  );
}
