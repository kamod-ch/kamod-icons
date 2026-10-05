import type { IconProps } from "../../shared/types";

export function LongJumpIcon({
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
      <path d="M4 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 2c4 0 7 4 7 8m-4 1h10v4H11Zm-8 4h6"/>
    </svg>
  );
}
