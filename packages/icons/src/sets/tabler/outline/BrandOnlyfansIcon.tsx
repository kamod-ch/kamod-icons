import type { IconProps } from "../../../shared/types";

export function BrandOnlyfansIcon({
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
      <path d="M8.5 6a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"/><path d="M8.5 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m5.5 1c2.5 0 6.42-1.467 7-4h-6c3-1 6.44-3.533 7-6h-4c-3.03 0-3.764-.196-5 1.5"/>
    </svg>
  );
}
