import type { IconProps } from "../../../shared/types";

export function ChessQueenIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 2a2 2 0 0 1 1.572 3.236l.793 1.983 1.702-1.702A2.003 2.003 0 0 1 18 3a2 2 0 0 1 .674 3.884l-1.69 9.295a1 1 0 0 1-.865.814L16 17H8a1 1 0 0 1-.956-.705l-.028-.116-1.69-9.295a2 2 0 1 1 2.607-1.367l1.701 1.702.794-1.983A2 2 0 0 1 12 2m6 16H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18"/>
    </svg>
  );
}
