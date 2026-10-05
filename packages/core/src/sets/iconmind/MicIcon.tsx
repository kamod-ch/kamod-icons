import type { IconProps } from "../../shared/types";

export function MicIcon({
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
      <path d="M9 5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v4a3 3 0 0 1-3 3 3 3 0 0 1-3-3Z"/><path d="M17 10a5 5 0 0 1-10 0m5 5v5"/>
    </svg>
  );
}
