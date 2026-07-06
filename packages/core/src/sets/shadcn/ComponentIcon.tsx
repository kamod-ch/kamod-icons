import type { IconProps } from "../../shared/types";

export function ComponentIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.5 8.5 9 12l-3.5 3.5L2 12zM12 2l3.5 3.5L12 9 8.5 5.5zm6.5 6.5L22 12l-3.5 3.5L15 12zM12 15l3.5 3.5L12 22l-3.5-3.5z"/>
    </svg>
  );
}
