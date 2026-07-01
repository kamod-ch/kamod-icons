import type { IconProps } from "../../../shared/types";

export function DropletsIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 12.003c.541 0 1.045.273 1.342.727l2.122 3.273a3.999 3.999 0 0 1-6.035 5.063c-1.487-1.248-1.864-3.382-.867-5.11L4.66 12.73A1.6 1.6 0 0 1 6 12.003m12 0c.541 0 1.045.273 1.342.727l2.122 3.273a3.999 3.999 0 0 1-6.035 5.063c-1.487-1.248-1.864-3.382-.867-5.11l2.098-3.227a1.6 1.6 0 0 1 1.34-.726m-6-10c.541 0 1.045.273 1.342.727l2.122 3.273a3.999 3.999 0 0 1-6.035 5.063c-1.487-1.248-1.864-3.382-.867-5.11L10.66 2.73A1.6 1.6 0 0 1 12 2.003"/>
    </svg>
  );
}
