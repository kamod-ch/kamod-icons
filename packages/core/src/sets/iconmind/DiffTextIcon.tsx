import type { IconProps } from "../../shared/types";

export function DiffTextIcon({
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
      <path d="M2.5 6h3M4 4.5v3M2.5 12h3m3-6H21M8.5 12H21M8.5 18H21"/>
    </svg>
  );
}
