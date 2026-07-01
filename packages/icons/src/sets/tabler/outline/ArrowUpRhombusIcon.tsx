import type { IconProps } from "../../../shared/types";

export function ArrowUpRhombusIcon({
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
      <path d="M12 16V3m3 3-3-3-3 3m5.5 12.5L12 21l-2.5-2.5L12 16z"/>
    </svg>
  );
}
