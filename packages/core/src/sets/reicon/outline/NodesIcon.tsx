import type { IconProps } from "../../../shared/types";

export function NodesIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14.664 5.101a8.36 8.36 0 0 1 5.257 5.306M3.828 14.641a8.36 8.36 0 0 1 1.966-7.206m11.714 11.822a8.35 8.35 0 0 1-7.228 1.9"/><path d="M12 7.667a2.666 2.666 0 1 0 0-5.334 2.666 2.666 0 1 0 0 5.334m-6.928 12a2.666 2.666 0 1 0 0-5.334 2.666 2.666 0 1 0 0 5.334m13.856 0a2.666 2.666 0 1 0 0-5.334 2.666 2.666 0 1 0 0 5.334"/></g>
    </svg>
  );
}
