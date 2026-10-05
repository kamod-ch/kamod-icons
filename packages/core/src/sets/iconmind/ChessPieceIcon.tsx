import type { IconProps } from "../../shared/types";

export function ChessPieceIcon({
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
      <path d="M7 21v-6c0-5 3-8 7-9l3-3v3c2 2 2 5 2 7v8Z"/><path d="M14 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-9 9h16"/>
    </svg>
  );
}
