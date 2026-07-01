import type { IconProps } from "../../../shared/types";

export function ClockCheckIcon({
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
      <path d="M20.942 13.021a9 9 0 1 0-9.407 7.967"/><path d="M12 7v5l3 3m0 4 2 2 4-4"/>
    </svg>
  );
}
