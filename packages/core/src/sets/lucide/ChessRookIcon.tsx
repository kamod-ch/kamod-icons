import type { IconProps } from "../../shared/types";

export function ChessRookIcon({
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
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm5-18v2m4-2v2m3 14-1-9M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2M6 4h12M7 18l1-9"/>
    </svg>
  );
}
