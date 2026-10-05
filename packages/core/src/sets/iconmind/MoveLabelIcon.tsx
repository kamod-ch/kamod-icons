import type { IconProps } from "../../shared/types";

export function MoveLabelIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 6h10l8 8-8 8H3Zm6 7.5h6"/><path d="m12.5 11 2.5 2.5-2.5 2.5"/>
    </svg>
  );
}
