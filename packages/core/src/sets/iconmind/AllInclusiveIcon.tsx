import type { IconProps } from "../../shared/types";

export function AllInclusiveIcon({
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
      <path d="M4 16a8 8 0 0 1 16 0M2 16h20"/><path d="m8 9 3 3 5-5"/>
    </svg>
  );
}
