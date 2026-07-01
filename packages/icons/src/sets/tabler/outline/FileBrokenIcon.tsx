import type { IconProps } from "../../../shared/types";

export function FileBrokenIcon({
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 7V5a2 2 0 0 1 2-2h7l5 5v2m0 9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2m0-3h.01M5 13h.01M5 10h.01M19 13h.01M19 16h.01"/>
    </svg>
  );
}
