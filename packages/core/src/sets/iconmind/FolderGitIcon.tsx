import type { IconProps } from "../../shared/types";

export function FolderGitIcon({
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
      <path d="M20 7v13H4V4h5l3 3h4M9.5 9.5V18"/><path d="M8.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 1.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1 2-5 5"/>
    </svg>
  );
}
