import type { IconProps } from "../../shared/types";

export function ListChecksIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6h11m-11 6h11m-11 6h11M3 6l1 1 2-2m-3 7 1 1 2-2m-3 7 1 1 2-2"/>
    </svg>
  );
}
