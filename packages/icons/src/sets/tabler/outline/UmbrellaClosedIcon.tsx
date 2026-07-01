import type { IconProps } from "../../../shared/types";

export function UmbrellaClosedIcon({
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
      <path d="m9 16 3-13 3 13zm3 0v3c0 2.667 4 2.667 4 0"/>
    </svg>
  );
}
