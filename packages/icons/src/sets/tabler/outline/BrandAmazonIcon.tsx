import type { IconProps } from "../../../shared/types";

export function BrandAmazonIcon({
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
      <path d="M17 12.5a15.2 15.2 0 0 1-7.37 1.44A14.6 14.6 0 0 1 3 11m16.5 4c.907-1.411 1.451-3.323 1.5-5-1.197-.773-2.577-.935-4-1"/>
    </svg>
  );
}
