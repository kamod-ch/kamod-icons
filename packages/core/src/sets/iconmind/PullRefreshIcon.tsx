import type { IconProps } from "../../shared/types";

export function PullRefreshIcon({
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
      <path d="M9.5 3 12 5.5 14.5 3m-5 4.5L12 10l2.5-2.5M3 14h18M3 19h18"/>
    </svg>
  );
}
