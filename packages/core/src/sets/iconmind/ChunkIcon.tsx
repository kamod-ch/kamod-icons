import type { IconProps } from "../../shared/types";

export function ChunkIcon({
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
      <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"/>
    </svg>
  );
}
