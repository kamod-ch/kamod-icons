import type { IconProps } from "../../shared/types";

export function DustpanIcon({
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
      <path d="M2 11h10c-.5 4-2 7-3 10H5c-1-3-2.5-6-3-10m16-7v8m-3 0h6v4h-6Z"/>
    </svg>
  );
}
