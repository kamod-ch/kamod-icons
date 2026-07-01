import type { IconProps } from "../../shared/types";

export function RectangleEllipsisIcon({
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
      <rect x="2" y="6" rx="2"/><path d="M12 12h.01M17 12h.01M7 12h.01"/>
    </svg>
  );
}
