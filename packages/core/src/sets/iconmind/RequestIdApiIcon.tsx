import type { IconProps } from "../../shared/types";

export function RequestIdApiIcon({
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
      <path d="M7 3H3v18h4M17 3h4v18h-4m-7-10a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M9.5 12.5 12 15l2.5-2.5"/>
    </svg>
  );
}
