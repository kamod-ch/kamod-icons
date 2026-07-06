import type { IconProps } from "../../shared/types";

export function ArrowUpDownIcon({
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
      <path d="m21 16-4 4-4-4m4 4V4M3 8l4-4 4 4M7 4v16"/>
    </svg>
  );
}
