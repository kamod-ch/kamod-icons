import type { IconProps } from "../../shared/types";

export function ArrowDownFromLineIcon({
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
      <path d="M19 3H5m7 18V7m-6 8 6 6 6-6"/>
    </svg>
  );
}
