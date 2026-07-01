import type { IconProps } from "../../../shared/types";

export function LetterDIcon({
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
      <path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7z"/>
    </svg>
  );
}
