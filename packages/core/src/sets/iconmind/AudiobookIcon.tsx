import type { IconProps } from "../../shared/types";

export function AudiobookIcon({
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
      <path d="M6 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm3-2v13"/><path d="M4 12a8 8 0 0 1 16 0M2 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0m16 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
