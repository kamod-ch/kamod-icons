import type { IconProps } from "../../../shared/types";

export function GradienterIcon({
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
      <path d="M3.227 14c.917 4 4.497 7 8.773 7 4.277 0 7.858-3 8.773-7m.007-4A9 9 0 0 0 12 3a8.985 8.985 0 0 0-8.782 7"/><path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
