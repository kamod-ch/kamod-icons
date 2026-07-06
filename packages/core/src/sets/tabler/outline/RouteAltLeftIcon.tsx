import type { IconProps } from "../../../shared/types";

export function RouteAltLeftIcon({
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
      <path d="M8 3H3v5m13-5h5v5"/><path d="m3 3 7.536 7.536A5 5 0 0 1 12 14.07V21m6-14.99V6m-2 2.02v-.01M14 10v.01"/>
    </svg>
  );
}
