import type { IconProps } from "../../shared/types";

export function PuzzleHobbyIcon({
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
      <path d="M3 4h6c0-1.5 4-1.5 4 0v6H3Zm8 9h10v6c0 1.5-4 1.5-4 0h-6Z"/>
    </svg>
  );
}
