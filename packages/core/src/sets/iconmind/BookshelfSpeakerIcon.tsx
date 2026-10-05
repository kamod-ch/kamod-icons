import type { IconProps } from "../../shared/types";

export function BookshelfSpeakerIcon({
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
      <path d="M7 3v18h10V3Z"/><path d="M10 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
