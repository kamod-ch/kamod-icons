import type { IconProps } from "../../shared/types";

export function NoonSunIcon({
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
      <path d="M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8m5-6v3m-7.5-.5L7 7m12.5-2.5L17 7M2 19h20"/>
    </svg>
  );
}
