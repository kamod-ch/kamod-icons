import type { IconProps } from "../../../shared/types";

export function NavigationEastIcon({
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
      <path d="M14 3h-4v6h4m-4-3h2.5M16 21l-4-8-4 8 4-2z"/>
    </svg>
  );
}
