import type { IconProps } from "../../../shared/types";

export function GitPullRequestIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 7v10m12 0V7s0-2-2-2h-3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 7.5 12.5 5 15 2.5"/>
    </svg>
  );
}
