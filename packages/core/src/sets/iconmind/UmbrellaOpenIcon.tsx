import type { IconProps } from "../../shared/types";

export function UmbrellaOpenIcon({
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
      <path d="M3 14a9 9 0 0 1 18 0M3 14h18m-9 0v7M5 3l2 2m5-3v2.5M19 3l-2 2"/>
    </svg>
  );
}
