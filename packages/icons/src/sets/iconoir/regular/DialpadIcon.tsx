import type { IconProps } from "../../../shared/types";

export function DialpadIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M12 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m6.5-15a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
    </svg>
  );
}
