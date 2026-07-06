import type { IconProps } from "../../../shared/types";

export function MoreVertIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0-16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
    </svg>
  );
}
