import type { IconProps } from "../../../shared/types";

export function UmbrellaIcon({
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
      <path d="M4 12a8 8 0 0 1 16 0zm8 0v6a2 2 0 0 0 4 0"/>
    </svg>
  );
}
