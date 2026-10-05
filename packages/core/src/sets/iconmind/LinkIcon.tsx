import type { IconProps } from "../../shared/types";

export function LinkIcon({
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
      <path d="M7.5 9H10a3 3 0 0 1 3 3 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3 3 3 0 0 1 3-3Z"/><path d="M16.5 9H19a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3 3 3 0 0 1 3-3Z"/>
    </svg>
  );
}
