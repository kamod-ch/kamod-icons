import type { IconProps } from "../../../shared/types";

export function TextureIcon({
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
      <path d="M6 3 3 6m18 12-3 3M11 3l-8 8m13-8L3 16M21 3 3 21M21 8 8 21m13-8-8 8"/>
    </svg>
  );
}
