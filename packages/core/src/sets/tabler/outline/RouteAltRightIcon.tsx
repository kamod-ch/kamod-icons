import type { IconProps } from "../../../shared/types";

export function RouteAltRightIcon({
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
      <path d="M16 3h5v5M8 3H3v5"/><path d="m21 3-7.536 7.536A5 5 0 0 0 12 14.07V21M6 6.01V6m2 2.02v-.01M10 10v.01"/>
    </svg>
  );
}
