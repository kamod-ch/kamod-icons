import type { IconProps } from "../../shared/types";

export function RatioIcon({
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
      <rect x="6" y="2" rx="2"/><rect x="2" y="6" rx="2"/>
    </svg>
  );
}
