import type { IconProps } from "../../shared/types";

export function EBikeIcon({
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
      <path d="M2 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0m12 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="m6 15 4-4h4l4 4m-8-8v4M7.5 7h5"/><path d="M10 14h5v3h-5Z"/>
    </svg>
  );
}
