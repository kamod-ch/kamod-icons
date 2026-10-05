import type { IconProps } from "../../shared/types";

export function ManifestFileIcon({
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
      <path d="M13 3H6v18h12V8Z"/><path d="M8 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3 0h5m-8 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3 0h5"/>
    </svg>
  );
}
