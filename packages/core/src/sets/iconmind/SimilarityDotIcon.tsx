import type { IconProps } from "../../shared/types";

export function SimilarityDotIcon({
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
      <path d="m15 7 5 5-8 8-8-8 5-5m-1 7.5h8m-7 0 4.5-4.5m0 0v4.5"/>
    </svg>
  );
}
