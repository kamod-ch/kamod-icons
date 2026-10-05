import type { IconProps } from "../../shared/types";

export function BurnoutIcon({
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
      <path d="M8 20v-5h8v5Zm4-5v-3m0-7c1 2.5 3 3.5 3 6a3 3 0 1 1-6 0c0-2 1.5-2.5 1.5-3.5C11 8 12 8 12 5"/>
    </svg>
  );
}
