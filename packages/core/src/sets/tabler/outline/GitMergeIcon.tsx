import type { IconProps } from "../../../shared/types";

export function GitMergeIcon({
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
      <path d="M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 8v8"/><path d="M7 8a4 4 0 0 0 4 4h4"/>
    </svg>
  );
}
