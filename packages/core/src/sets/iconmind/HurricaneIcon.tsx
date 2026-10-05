import type { IconProps } from "../../shared/types";

export function HurricaneIcon({
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
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M6 12a6 6 0 0 1 12 0m0 0a6 6 0 0 1-12 0"/><path d="M18 12V4h-7m-5 8v8h7"/>
    </svg>
  );
}
