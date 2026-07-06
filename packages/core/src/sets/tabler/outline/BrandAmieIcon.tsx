import type { IconProps } from "../../../shared/types";

export function BrandAmieIcon({
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
      <path d="M3 8.5c0 1.33.472 2.55 1.257 3.5A5.5 5.5 0 0 0 12 19.743 5.5 5.5 0 0 0 19.743 12 5.5 5.5 0 0 0 12 4.257 5.5 5.5 0 0 0 3 8.5"/><path d="M10 9.5c0-.828.895-1.5 2-1.5s2 .672 2 1.5v5c0 .828-.895 1.5-2 1.5s-2-.672-2-1.5z"/>
    </svg>
  );
}
