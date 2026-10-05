import type { IconProps } from "../../shared/types";

export function SilverMedalIcon({
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
      <path d="m7 3 5 5m5-5-5 5m-6 7a6 6 0 1 0 12 0 6 6 0 1 0-12 0m3-2h6m-6 4h6"/>
    </svg>
  );
}
