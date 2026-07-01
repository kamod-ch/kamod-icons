import type { IconProps } from "../../../shared/types";

export function CircleCaretRightIcon({
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
      <path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-5.293 4.953A1 1 0 0 0 10 9v6c0 .217.07.433.21.613l.083.094a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414z"/>
    </svg>
  );
}
