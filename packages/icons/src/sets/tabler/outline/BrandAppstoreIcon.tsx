import type { IconProps } from "../../../shared/types";

export function BrandAppstoreIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m5 4 1.106-1.99m1.4-2.522L13 7m-6 7h5m2.9 0H17m-1 2-2.51-4.518m-1.487-2.677-1-1.805"/>
    </svg>
  );
}
