import type { IconProps } from "../../shared/types";

export function EarlyCheckinIcon({
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
      <path d="M6 3h11l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"/><path d="M7 6h4v3H7Zm3 8.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m3.5-3v3m-3 0h3"/>
    </svg>
  );
}
