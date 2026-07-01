import type { IconProps } from "../../../shared/types";

export function ArrowUpCircleIcon({
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
      <path d="M12 17V3m3 3-3-3-3 3m3 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
    </svg>
  );
}
