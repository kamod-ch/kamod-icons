import type { IconProps } from "../../../shared/types";

export function BrandSkypeIcon({
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
      <path d="M12 3a9 9 0 0 1 8.603 11.65 4.5 4.5 0 0 1-5.953 5.953A9 9 0 0 1 3.397 9.35 4.5 4.5 0 0 1 9.35 3.396 9 9 0 0 1 12 3"/><path d="M8 14.5c.5 2 2.358 2.5 4 2.5 2.905 0 4-1.187 4-2.5 0-1.503-1.927-2.5-4-2.5s-4-1-4-2.5C8 8.187 9.095 7 12 7c1.642 0 3.5.5 4 2.5"/>
    </svg>
  );
}
