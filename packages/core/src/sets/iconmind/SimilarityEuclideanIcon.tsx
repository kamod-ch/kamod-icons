import type { IconProps } from "../../shared/types";

export function SimilarityEuclideanIcon({
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
      <path d="m15 7 5 5-8 8-8-8 5-5"/><path d="M8 15.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-4 5 4-4"/>
    </svg>
  );
}
