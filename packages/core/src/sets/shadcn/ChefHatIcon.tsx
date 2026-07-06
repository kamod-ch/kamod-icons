import type { IconProps } from "../../shared/types";

export function ChefHatIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 13.87A4 4 0 0 1 7.41 6a5.1 5.1 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0c.441.445.797.967 1.05 1.54A4 4 0 0 1 18 13.87V21H6zM6 17h12"/>
    </svg>
  );
}
