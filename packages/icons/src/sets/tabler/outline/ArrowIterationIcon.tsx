import type { IconProps } from "../../../shared/types";

export function ArrowIterationIcon({
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
      <path d="M8.5 16A5.5 5.5 0 1 0 3 10.5v.5m0 5h18m-3-3 3 3-3 3"/>
    </svg>
  );
}
