import type { IconProps } from "../../shared/types";

export function TableCellsSplitIcon({
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
      <path d="M12 15V9m-9 6h18M3 9h18"/><rect x="3" y="3" rx="2"/>
    </svg>
  );
}
