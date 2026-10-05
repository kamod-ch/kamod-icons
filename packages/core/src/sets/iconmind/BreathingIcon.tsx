import type { IconProps } from "../../shared/types";

export function BreathingIcon({
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
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m8-6.93a8 8 0 0 1 0 13.86m-8 0A8 8 0 0 1 8 5.07"/>
    </svg>
  );
}
