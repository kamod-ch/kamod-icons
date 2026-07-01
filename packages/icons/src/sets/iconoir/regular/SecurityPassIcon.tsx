import type { IconProps } from "../../../shared/types";

export function SecurityPassIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 11 3 3 8-8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 12a8 8 0 1 1-5.3-7.533"/>
    </svg>
  );
}
