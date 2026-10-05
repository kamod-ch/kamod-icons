import type { IconProps } from "../../shared/types";

export function CyclingIcon({
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
      <path d="M3 17h18m-7-5a4 4 0 1 0 8 0 4 4 0 1 0-8 0m-5 5V5M5 5h7M9 9h6"/>
    </svg>
  );
}
