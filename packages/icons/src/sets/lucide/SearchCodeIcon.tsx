import type { IconProps } from "../../shared/types";

export function SearchCodeIcon({
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
      <path d="m13 13.5 2-2.5-2-2.5M21 21l-4.3-4.3M9 8.5 7 11l2 2.5"/><circle cx="11" cy="11" r="8"/>
    </svg>
  );
}
