import type { IconProps } from "../../shared/types";

export function GitMergeConflictIcon({
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
      <path d="M12 6h4a2 2 0 0 1 2 2v7M6 12v9M9 3 3 9m6 0L3 3"/><circle cx="18" cy="18" r="3"/>
    </svg>
  );
}
