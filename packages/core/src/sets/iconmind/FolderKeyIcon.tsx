import type { IconProps } from "../../shared/types";

export function FolderKeyIcon({
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
      <path d="M20 7v13H4V4h5l3 3h4"/><path d="M8 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 0h3.5m-1 0v2.5"/>
    </svg>
  );
}
