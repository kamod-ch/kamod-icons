import type { IconProps } from "../../../shared/types";

export function BrandTeslaIcon({
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
      <path d="m12 21 3-11c2.359 0 3 0 3 1 0 0 1.18-1.745 2-3-3.077-1.464-6-1-6-1l-2 2-2-2s-2.923-.464-6 1c.82 1.255 2 3 2 3 0-1 .744-1 3-1zm8-16C14.886 3 9.114 3 4 5"/>
    </svg>
  );
}
