import type { IconProps } from "../../../shared/types";

export function TriangleWarningIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M21.915 16.687 14.68 4.15A3.07 3.07 0 0 0 12 2.614c-1.119 0-2.12.574-2.68 1.537l-.002.003-7.234 12.533c-.56.971-.56 2.13.001 3.1a3.07 3.07 0 0 0 2.682 1.546h14.466a3.07 3.07 0 0 0 2.681-1.547 3.07 3.07 0 0 0 .001-3.1ZM11 9a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0zm1 9c-.736 0-1.333-.6-1.333-1.333s.597-1.334 1.333-1.334 1.333.6 1.333 1.334C13.333 17.4 12.736 18 12 18Z"/>
    </svg>
  );
}
