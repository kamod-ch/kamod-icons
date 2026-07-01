import type { IconProps } from "../../../shared/types";

export function GitForkIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 7v10M17 7v1c0 2.5-2 3-2 3l-6 2s-2 .5-2 3v1"/>
    </svg>
  );
}
