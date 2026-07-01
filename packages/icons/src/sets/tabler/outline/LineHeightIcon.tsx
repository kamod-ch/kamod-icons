import type { IconProps } from "../../../shared/types";

export function LineHeightIcon({
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
      <path d="m3 8 3-3 3 3m-6 8 3 3 3-3M6 5v14m7-13h7m-7 6h7m-7 6h7"/>
    </svg>
  );
}
