import type { IconProps } from "../../../shared/types";

export function KeyframeMinusInIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M14.035 2.124a2.75 2.75 0 0 0-4.07 0L2.668 10.15a2.75 2.75 0 0 0 0 3.7l7.297 8.026a2.75 2.75 0 0 0 4.07 0l7.297-8.027a2.75 2.75 0 0 0 0-3.7zM9 11.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/>
    </svg>
  );
}
