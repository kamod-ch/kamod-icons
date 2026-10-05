import type { IconProps } from "../../shared/types";

export function PairAgentsIcon({
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
      <path d="M8.69 7.37a4 4 0 1 1-3.38 0m13.38 2a4 4 0 1 1-3.38 0M11 11l2 2"/>
    </svg>
  );
}
