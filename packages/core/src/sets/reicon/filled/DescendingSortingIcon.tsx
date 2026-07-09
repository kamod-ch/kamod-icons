import type { IconProps } from "../../../shared/types";

export function DescendingSortingIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M19.627 16.293 18 17.92V8.333a1 1 0 0 0-2 0v9.586l-1.627-1.627a1 1 0 1 0-1.414 1.415l3.333 3.333a1 1 0 0 0 1.413 0l3.334-3.333a1 1 0 1 0-1.415-1.415ZM13.333 13a1 1 0 0 0-1-1H3.667a1 1 0 0 0 0 2h8.666a1 1 0 0 0 1-1ZM3.667 9.333h8.666a1 1 0 0 0 0-2H3.667a1 1 0 0 0 0 2Zm0-4.666H17a1 1 0 0 0 0-2H3.667a1 1 0 0 0 0 2Z"/>
    </svg>
  );
}
