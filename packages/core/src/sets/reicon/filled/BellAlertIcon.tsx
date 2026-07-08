import type { IconProps } from "../../../shared/types";

export function BellAlertIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M4.71 7.907a7.32 7.32 0 0 1 14.58 0l.178 1.957a11.4 11.4 0 0 0 1.865 5.283l.033.05a2.285 2.285 0 0 1-1.901 3.553H4.535a2.285 2.285 0 0 1-1.901-3.553l.033-.05a11.4 11.4 0 0 0 1.865-5.283zM11.25 11V7a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0ZM11 14.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/><path fill="currentColor" d="M10.05 20.124a.75.75 0 0 0-1.298.751 3.749 3.749 0 0 0 6.496 0 .75.75 0 1 0-1.298-.75 2.249 2.249 0 0 1-3.9 0Z"/>
    </svg>
  );
}
