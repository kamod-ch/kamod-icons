import type { IconProps } from "../../shared/types";

export function BitemporalIcon({
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
      <path d="M4 3v17m0 0h17M7 17l5-5m0 0 6-6m-7 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
