import type { IconProps } from "../../../shared/types";

export function LayoutAlignMiddleIcon({
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
      <path d="M13 5a3 3 0 0 1 3 3v3h4a1 1 0 0 1 0 2h-4v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-3H4a1 1 0 0 1 0-2h4V8a3 3 0 0 1 3-3z"/>
    </svg>
  );
}
