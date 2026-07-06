import type { IconProps } from "../../shared/types";

export function GitPullRequestCreateIcon({
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
      <circle cx="6" cy="6" r="3"/><path d="M6 9v12m7-15h3a2 2 0 0 1 2 2v3m0 4v6m3-3h-6"/>
    </svg>
  );
}
