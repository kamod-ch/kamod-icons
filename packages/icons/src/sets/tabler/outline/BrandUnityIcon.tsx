import type { IconProps } from "../../../shared/types";

export function BrandUnityIcon({
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
      <path d="m14 3 6 4v7m-2 3-6 4-6-4m-2-3V7l6-4"/><path d="m4 7 8 5v9m8-14-8 5"/>
    </svg>
  );
}
