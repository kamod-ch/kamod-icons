import type { IconProps } from "../../../shared/types";

export function GitPullRequestConflictIcon({
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
      <path d="M16 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M11 6h5a2 2 0 0 1 2 2v8M4 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-7v5M4 4l4 4m0-4L4 8"/>
    </svg>
  );
}
