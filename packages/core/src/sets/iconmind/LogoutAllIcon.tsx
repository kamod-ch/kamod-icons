import type { IconProps } from "../../shared/types";

export function LogoutAllIcon({
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
      <path d="M9 3H3v18h6m1-12h10m-2.5-2.5L20 9l-2.5 2.5M10 15h10m-2.5-2.5L20 15l-2.5 2.5"/>
    </svg>
  );
}
