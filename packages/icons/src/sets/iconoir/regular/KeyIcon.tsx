import type { IconProps } from "../../../shared/types";

export function KeyIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0h12v3m-4-3v3"/>
    </svg>
  );
}
