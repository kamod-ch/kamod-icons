import type { IconProps } from "../../../shared/types";

export function SignRightIcon({
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
      <path d="M8 21h4m-2 0V11m0-5V3M6 6h10l2 2.5-2 2.5H6z"/>
    </svg>
  );
}
