import type { IconProps } from "../../../shared/types";

export function MacDockIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M2 17.5l2-1m18 1-2-1"/>
    </svg>
  );
}
