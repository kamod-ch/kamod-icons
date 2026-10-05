import type { IconProps } from "../../shared/types";

export function VoteQuorumIcon({
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
      <path d="M7.27 3.28a3 3 0 1 1-2.54 0m14.54 0a3 3 0 1 1-2.54 0m-3.46 12a3 3 0 1 1-2.54 0M9.5 11l2 2L15 9.5"/>
    </svg>
  );
}
