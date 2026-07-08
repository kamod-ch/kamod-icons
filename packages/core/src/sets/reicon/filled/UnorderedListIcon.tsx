import type { IconProps } from "../../../shared/types";

export function UnorderedListIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" transform="scale(1.33333)"><circle cx="3.75" cy="5.25" r="2.25"/><circle cx="3.75" cy="12.75" r="2.25"/><path d="M16.25 6h-7.5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5Zm0 7.5h-7.5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5Z"/></g>
    </svg>
  );
}
