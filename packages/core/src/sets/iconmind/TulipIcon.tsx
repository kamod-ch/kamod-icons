import type { IconProps } from "../../shared/types";

export function TulipIcon({
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
      <path d="M8 5v5l4 4 4-4V5l-4 4Zm4 9v7m-7-1c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6m8 0c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6"/>
    </svg>
  );
}
