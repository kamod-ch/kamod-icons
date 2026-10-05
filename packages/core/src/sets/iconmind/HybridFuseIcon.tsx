import type { IconProps } from "../../shared/types";

export function HybridFuseIcon({
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
      <path d="m3 5 6 6m-6 8 6-6m1-1h7m0-2.5 2.5 2.5-2.5 2.5"/>
    </svg>
  );
}
