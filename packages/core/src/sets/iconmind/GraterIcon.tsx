import type { IconProps } from "../../shared/types";

export function GraterIcon({
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
      <path d="M8 6h8c1 5 2 10 2 15H6c0-5 1-10 2-15m1 0a3 3 0 0 1 6 0m-6 4h3m0 4h3m-6 4h3"/>
    </svg>
  );
}
