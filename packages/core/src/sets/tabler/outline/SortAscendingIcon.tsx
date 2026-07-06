import type { IconProps } from "../../../shared/types";

export function SortAscendingIcon({
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
      <path d="M4 6h7m-7 6h7m-7 6h9m2-9 3-3 3 3m-3-3v12"/>
    </svg>
  );
}
