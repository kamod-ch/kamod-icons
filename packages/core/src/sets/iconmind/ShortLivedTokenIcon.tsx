import type { IconProps } from "../../shared/types";

export function ShortLivedTokenIcon({
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
      <path d="M2 12a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3m12 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4-2.5V12m0 0h2.5"/>
    </svg>
  );
}
