import type { IconProps } from "../../shared/types";

export function TwilightIcon({
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
      <path d="M5 18a7 7 0 0 1 14 0M2 19h20M6 4.5 8.5 7 6 9.5 3.5 7Zm12 2L20.5 9 18 11.5 15.5 9Z"/>
    </svg>
  );
}
