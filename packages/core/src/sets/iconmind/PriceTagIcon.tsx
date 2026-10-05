import type { IconProps } from "../../shared/types";

export function PriceTagIcon({
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
      <path d="M2 11a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m4.5-1.5v3m7.5.5h5l3 3-3 3h-5Z"/>
    </svg>
  );
}
