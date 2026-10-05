import type { IconProps } from "../../shared/types";

export function Bm25Icon({
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
      <path d="M2 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0h15M2 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0h11M2 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0h7"/>
    </svg>
  );
}
