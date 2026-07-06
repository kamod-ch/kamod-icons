import type { IconProps } from "../../../shared/types";

export function GitBranchDeletedIcon({
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
      <path d="M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v8m2 2h6a2 2 0 0 0 2-2v-5"/><path d="m14 14 3-3 3 3M15 4l4 4m-4 0 4-4"/>
    </svg>
  );
}
