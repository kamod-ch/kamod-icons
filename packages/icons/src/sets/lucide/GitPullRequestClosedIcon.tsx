import type { IconProps } from "../../shared/types";

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
      <circle cx="6" cy="6" r="3"/><path d="M6 9v12M21 3l-6 6m6 0-6-6m3 8.5V15"/><circle cx="18" cy="18" r="3"/>
    </svg>
  );
}
