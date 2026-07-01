import type { IconProps } from "../../shared/types";

export function SeparatorHorizontalIcon({
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
      <path d="m16 16-4 4-4-4m-5-4h18M8 8l4-4 4 4"/>
    </svg>
  );
}
