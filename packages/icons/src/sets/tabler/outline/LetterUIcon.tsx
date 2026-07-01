import type { IconProps } from "../../../shared/types";

export function LetterUIcon({
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
      <path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5V4"/>
    </svg>
  );
}
