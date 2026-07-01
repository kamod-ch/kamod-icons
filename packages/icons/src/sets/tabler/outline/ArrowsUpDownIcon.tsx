import type { IconProps } from "../../../shared/types";

export function ArrowsUpDownIcon({
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
      <path d="M7 3v18m3-15L7 3 4 6m16 12-3 3-3-3m3 3V3"/>
    </svg>
  );
}
