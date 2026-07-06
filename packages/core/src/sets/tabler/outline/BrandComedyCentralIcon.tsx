import type { IconProps } from "../../../shared/types";

export function BrandComedyCentralIcon({
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
      <path d="M5.343 17.657a8 8 0 1 0 0-11.314"/><path d="M13.828 9.172a4 4 0 1 0 0 5.656"/>
    </svg>
  );
}
