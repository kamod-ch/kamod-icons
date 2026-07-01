import type { IconProps } from "../../../shared/types";

export function CoinsSwapIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.019 9A6.5 6.5 0 1 1 15 14.981"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 22a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13M22 17a3 3 0 0 1-3 3h-2m0 0 2-2m-2 2 2 2M2 7a3 3 0 0 1 3-3h2m0 0L5 6m2-2L5 2"/>
    </svg>
  );
}
