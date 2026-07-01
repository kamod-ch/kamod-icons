import type { IconProps } from "../../../shared/types";

export function BrandGumroadIcon({
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
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/><path d="M13.5 13H16v3"/><path d="M15.024 9.382A4 4 0 1 0 12 16c1.862 0 2.554-1.278 3-3"/>
    </svg>
  );
}
