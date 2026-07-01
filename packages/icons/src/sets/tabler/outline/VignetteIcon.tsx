import type { IconProps } from "../../../shared/types";

export function VignetteIcon({
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
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M7.02 12h-.01m5.01-5h-.01m5.01 5h-.01m-4.99 5h-.01M8.483 8.468l-.007-.007m7.078.007-.007-.007m.007 7.078-.007-.007m-7.064.007-.007-.007"/>
    </svg>
  );
}
