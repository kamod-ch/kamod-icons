import type { IconProps } from "../../../shared/types";

export function ProgressBarIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M3.75 11.75H9"/><rect x=".75" y="8.75" rx="3" ry="3"/><path d="m9.404 5.052 1.757-2.53a.492.492 0 0 0-.404-.772H7.244a.492.492 0 0 0-.404.772l1.757 2.53a.492.492 0 0 0 .808 0Z"/></g>
    </svg>
  );
}
