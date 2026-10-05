import type { IconProps } from "../../shared/types";

export function ToastGlassesIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 4h6.5c0 4-1.5 6-2 8H5c-.5-2-2-4-2-8m3 8v8m-3 0h6m5.5-16H21c0 4-1.5 6-2 8h-2.5c-.5-2-2-4-2-8m3.5 8v8m-3 0h6"/>
    </svg>
  );
}
