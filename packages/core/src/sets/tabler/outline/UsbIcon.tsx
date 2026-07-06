import type { IconProps } from "../../../shared/types";

export function UsbIcon({
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
      <path d="M10 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-2V5.5M7 10v3l5 3m0-1.5 5-2V10m-1 0h2V8h-2z"/><path d="M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4-3.5h4L12 3z"/>
    </svg>
  );
}
