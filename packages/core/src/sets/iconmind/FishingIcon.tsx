import type { IconProps } from "../../shared/types";

export function FishingIcon({
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
      <path d="M9 19c-3 0-5-2-5-4s2-4 5-4c4 0 6 2 7 4-1 2-3 4-7 4m7-4 3-3m-3 3 3 3M9 8V2"/>
    </svg>
  );
}
