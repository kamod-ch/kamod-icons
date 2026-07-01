import type { IconProps } from "../../../shared/types";

export function SwitchHorizontalIcon({
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
      <path d="m16 3 4 4-4 4m-6-4h10M8 13l-4 4 4 4m-4-4h9"/>
    </svg>
  );
}
