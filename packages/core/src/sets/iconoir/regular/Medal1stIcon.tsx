import type { IconProps } from "../../../shared/types";

export function Medal1stIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.272 10.445 18 2m-8.684 8.632L5 2m7.762 8.048L8.835 2m5.525 0-1.04 2.5M6 16a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.5 15 2-1.5v5"/>
    </svg>
  );
}
