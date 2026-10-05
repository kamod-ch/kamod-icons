import type { IconProps } from "../../shared/types";

export function MultiplayerIcon({
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
      <path d="M3 8v8h7V8Zm11 0v8h7V8Z"/><path d="M5.5 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m11 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
