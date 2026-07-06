import type { IconProps } from "../../../shared/types";

export function GitPullRequestClosedIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-10v6m12 0V7s0-2-2-2h-4M4 7.243 6.121 5.12m0 0L8.243 3M6.12 5.121 4 3m2.121 2.121 2.122 2.122"/>
    </svg>
  );
}
