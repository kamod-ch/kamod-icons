import type { IconProps } from "../../../shared/types";

export function IceCream2Icon({
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
      <path d="M17.657 11a6 6 0 1 0-11.315 0m0 0L12 22l5.657-11z"/>
    </svg>
  );
}
