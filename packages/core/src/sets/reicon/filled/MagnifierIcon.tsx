import type { IconProps } from "../../../shared/types";

export function MagnifierIcon({
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
      <g fill="currentColor" fillRule="evenodd" strokeWidth="1.333" clipRule="evenodd"><path d="M14.811 14.811a1 1 0 0 1 1.414 0l5.482 5.482a1 1 0 1 1-1.414 1.414l-5.482-5.482a1 1 0 0 1 0-1.414Z"/><path d="M2 10.333a8.333 8.333 0 1 1 16.667 0 8.333 8.333 0 0 1-16.667 0ZM10.333 4a6.333 6.333 0 1 0 0 12.667 6.333 6.333 0 0 0 0-12.667Z"/></g>
    </svg>
  );
}
