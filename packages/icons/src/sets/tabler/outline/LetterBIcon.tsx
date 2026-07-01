import type { IconProps } from "../../../shared/types";

export function LetterBIcon({
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
      <path d="M7 20V4h6a4 4 0 0 1 0 8 4 4 0 0 1 0 8zm0-8h6"/>
    </svg>
  );
}
