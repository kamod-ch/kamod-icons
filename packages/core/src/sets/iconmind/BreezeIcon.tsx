import type { IconProps } from "../../shared/types";

export function BreezeIcon({
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
      <path d="M2 8h13a3.5 3.5 0 1 0-3.5-3.5M2 17h12a3.5 3.5 0 1 0-3.5 3.5"/>
    </svg>
  );
}
