import type { IconProps } from "../../shared/types";

export function DrawingIcon({
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
      <path d="M3 3v13h12V3Z"/><path d="m12 15 7-7 2 2-7 7Z"/><path d="m13 16-3 3h3"/>
    </svg>
  );
}
