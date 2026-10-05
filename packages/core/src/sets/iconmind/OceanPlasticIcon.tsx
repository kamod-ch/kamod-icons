import type { IconProps } from "../../shared/types";

export function OceanPlasticIcon({
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
      <path d="M9 5v9h6V5Zm1.5 0V2h3v3M3 18l3-3 3 3 3-3 3 3 3-3 3 3"/>
    </svg>
  );
}
