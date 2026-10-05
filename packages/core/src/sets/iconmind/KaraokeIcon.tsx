import type { IconProps } from "../../shared/types";

export function KaraokeIcon({
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
      <path d="M9 6a3 3 0 0 1 3-3 3 3 0 0 1 3 3v3a3 3 0 0 1-3 3 3 3 0 0 1-3-3Zm3 6v4m-4 0h8M4 20h16"/>
    </svg>
  );
}
