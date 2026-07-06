import type { IconProps } from "../../shared/types";

export function ScissorsIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6M20 4 8.12 15.88m6.35-1.4L20 20M8.12 8.12 12 12"/>
    </svg>
  );
}
