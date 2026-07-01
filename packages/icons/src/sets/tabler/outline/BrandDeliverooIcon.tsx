import type { IconProps } from "../../../shared/types";

export function BrandDeliverooIcon({
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
      <path d="m15 11 1-9 5 .5L20 16l-3 6-12.5-2.5-1.5-6 7-1.5-1.5-7.5 4.5-1z"/><path fill="currentColor" d="M14.5 15.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-4-1a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
