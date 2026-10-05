import type { IconProps } from "../../shared/types";

export function SatisfactionTrendIcon({
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
      <path d="M3 9a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 1 4 0l-4 4Zm10 10 3-3 2 2 4-4"/>
    </svg>
  );
}
