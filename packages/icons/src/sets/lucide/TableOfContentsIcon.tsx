import type { IconProps } from "../../shared/types";

export function TableOfContentsIcon({
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
      <path d="M16 5H3m13 7H3m13 7H3M21 5h.01M21 12h.01M21 19h.01"/>
    </svg>
  );
}
