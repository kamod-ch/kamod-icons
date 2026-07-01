import type { IconProps } from "../../../shared/types";

export function CropIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 18H6V3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 6h15v15"/>
    </svg>
  );
}
