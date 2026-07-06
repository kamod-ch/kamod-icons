import type { IconProps } from "../../../shared/types";

export function HighlightIcon({
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
      <path d="M3 19h4L17.5 8.5a2.828 2.828 0 1 0-4-4L3 15zm9.5-13.5 4 4m-12 4 4 4M21 15v4h-8l4-4z"/>
    </svg>
  );
}
