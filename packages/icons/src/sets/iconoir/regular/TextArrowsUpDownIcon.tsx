import type { IconProps } from "../../../shared/types";

export function TextArrowsUpDownIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 21V11m0 10-2-2.5m2 2.5 2-2.5M18 11l-2 2m2-2 2 2M9 5v12m0 0H7m2 0h2m4-10V5H3v2"/>
    </svg>
  );
}
