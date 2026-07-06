import type { IconProps } from "../../../shared/types";

export function BounceLeftIcon({
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
      <path d="M20 15.5c-3-1-5.5-.5-8 4.5-.5-3-1.5-5.5-3-8M6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>
    </svg>
  );
}
