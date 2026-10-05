import type { IconProps } from "../../shared/types";

export function MusicGenerateIcon({
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
      <path d="M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h5M7 17v4l4-4"/><path d="M8.5 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4-6v6m0-6L15 8.5"/>
    </svg>
  );
}
