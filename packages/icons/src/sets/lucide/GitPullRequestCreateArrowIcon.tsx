import type { IconProps } from "../../shared/types";

export function GitPullRequestCreateArrowIcon({
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
      <circle cx="5" cy="6" r="3"/><path d="M5 9v12M15 9l-3-3 3-3"/><path d="M12 6h5a2 2 0 0 1 2 2v3m0 4v6m3-3h-6"/>
    </svg>
  );
}
