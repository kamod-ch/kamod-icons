import type { IconProps } from "../../shared/types";

export function NeighbourPersonIcon({
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
      <path d="M4 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-1 9a4 4 0 0 1 8 0m4-10v14m4-14v14m-4-10h4m-4 5h4"/>
    </svg>
  );
}
