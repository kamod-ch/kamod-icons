import type { IconProps } from "../../shared/types";

export function SaladBowlIcon({
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
      <path d="M4 12h16c0 5-4 9-8 9s-8-4-8-9m8 0c0-4-2-7-5-8-1 4 1 7 5 8m0 0c0-3 2-6 5-7 1 3-1 6-5 7"/>
    </svg>
  );
}
