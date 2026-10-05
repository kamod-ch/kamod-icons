import type { IconProps } from "../../shared/types";

export function PartyPopperIcon({
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
      <path d="m3 21 8-8c2 2 3 5 2 8ZM14 9l3-3m-1 6 3-3m-7-3 3-3"/>
    </svg>
  );
}
