import type { IconProps } from "../../shared/types";

export function MirrorRectangularIcon({
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
      <path d="M11 6 8 9m8-2-8 8"/><rect x="4" y="2" rx="2"/>
    </svg>
  );
}
