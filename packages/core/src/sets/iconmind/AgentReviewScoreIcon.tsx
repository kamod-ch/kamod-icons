import type { IconProps } from "../../shared/types";

export function AgentReviewScoreIcon({
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
      <path d="M8.19 8.37a4 4 0 1 1-3.38 0M14 13v5m3.5-9v9m3.5-3v3"/>
    </svg>
  );
}
