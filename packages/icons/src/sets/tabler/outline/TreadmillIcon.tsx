import type { IconProps } from "../../../shared/types";

export function TreadmillIcon({
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
      <path d="M10 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 14l4 1 .5-.5M12 18v-3l-3-2.923L9.75 7"/><path d="M6 10V8l4-1 2.5 2.5 2.5.5m6 12a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m15-1 1-11 2-1"/>
    </svg>
  );
}
