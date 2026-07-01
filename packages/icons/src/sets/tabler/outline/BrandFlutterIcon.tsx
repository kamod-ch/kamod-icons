import type { IconProps } from "../../../shared/types";

export function BrandFlutterIcon({
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
      <path d="m7 14-3-3 8-8h6zm7 7-5-5 5-5h5l-5 5 5 5z"/>
    </svg>
  );
}
