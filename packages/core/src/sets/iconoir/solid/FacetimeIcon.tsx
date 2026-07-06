import type { IconProps } from "../../../shared/types";

export function FacetimeIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.25 8A6.75 6.75 0 0 1 8 1.25h8A6.75 6.75 0 0 1 22.75 8v8A6.75 6.75 0 0 1 16 22.75H8A6.75 6.75 0 0 1 1.25 16zm4 3A2.75 2.75 0 0 1 8 8.25h3a2.75 2.75 0 0 1 2.74 2.508l2.85-2.138c.89-.667 2.16-.032 2.16 1.08v4.6c0 1.112-1.27 1.748-2.16 1.08l-2.85-2.138A2.75 2.75 0 0 1 11 15.75H8A2.75 2.75 0 0 1 5.25 13z" clipRule="evenodd"/>
    </svg>
  );
}
