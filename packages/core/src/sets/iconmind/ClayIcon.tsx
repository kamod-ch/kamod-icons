import type { IconProps } from "../../shared/types";

export function ClayIcon({
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
      <path d="M4 14C4 8 8 4 12 4c5 0 8 5 8 9s-3 5-8 5-8 0-8-4m2 7h12"/>
    </svg>
  );
}
