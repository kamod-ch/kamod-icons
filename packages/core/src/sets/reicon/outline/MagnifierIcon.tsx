import type { IconProps } from "../../../shared/types";

export function MagnifierIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-5.482-5.482m-5.185 2.149a7.333 7.333 0 1 0 0-14.667 7.333 7.333 0 0 0 0 14.667"/>
    </svg>
  );
}
