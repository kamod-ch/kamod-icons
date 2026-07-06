import type { IconProps } from "../../../shared/types";

export function ConeIcon({
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
      <path d="M21 17.998v-.5l-8.13-14.99a1 1 0 0 0-1.74 0L3 17.497v.5C3 19.656 7.03 21 12 21s9-1.344 9-3.002"/>
    </svg>
  );
}
