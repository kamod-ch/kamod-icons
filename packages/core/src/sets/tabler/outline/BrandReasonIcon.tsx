import type { IconProps } from "../../../shared/types";

export function BrandReasonIcon({
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
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M18 18h-3v-6h3m0 3h-3m-7 3v-6h2.5a1.5 1.5 0 0 1 0 3H8m4 3-2-3"/>
    </svg>
  );
}
