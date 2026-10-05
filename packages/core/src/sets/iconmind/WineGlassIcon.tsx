import type { IconProps } from "../../shared/types";

export function WineGlassIcon({
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
      <path d="M6 4h12v4c0 4-2.5 6-6 6s-6-2-6-6Zm6 10v6m-5 0h10"/>
    </svg>
  );
}
