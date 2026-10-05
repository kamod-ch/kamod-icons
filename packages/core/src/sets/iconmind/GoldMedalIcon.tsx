import type { IconProps } from "../../shared/types";

export function GoldMedalIcon({
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
      <path d="m7 3 5 5m5-5-5 5m-6 7a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/><path d="M10 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
