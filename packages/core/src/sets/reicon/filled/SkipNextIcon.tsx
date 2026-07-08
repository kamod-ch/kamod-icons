import type { IconProps } from "../../../shared/types";

export function SkipNextIcon({
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
      <path fill="currentColor" d="M16.66 14.647c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033v13.934c0 2.31 2.134 3.769 3.87 2.648zM22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0z"/>
    </svg>
  );
}
