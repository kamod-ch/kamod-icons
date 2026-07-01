import type { IconProps } from "../../../shared/types";

export function ChocolateIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 6.5c-3 0-4.5-.5-4.5-3.5H5v18h14zm0 8.5H5m0-6h14m-7 12V3"/>
    </svg>
  );
}
