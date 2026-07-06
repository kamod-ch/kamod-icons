import type { IconProps } from "../../../shared/types";

export function UserCartIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 12.5-.833 2.5m0 0L20 18.5h-4.5l-1-3.5zM16.5 20.51l.01-.011m2.99.011.01-.011M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 18a7 7 0 0 1 11.33-5.5"/>
    </svg>
  );
}
