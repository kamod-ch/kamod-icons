import type { IconProps } from "../../../shared/types";

export function SquareDottedArrowBottomRightIcon({
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
      <g transform="scale(1.33333)"><circle cx="2.75" cy="9" r=".75" fill="currentColor"/><circle cx="9" cy="2.75" r=".75" fill="currentColor"/><circle cx="2.75" cy="2.75" r=".75" fill="currentColor"/><circle cx="2.75" cy="5.875" r=".75" fill="currentColor"/><circle cx="2.75" cy="12.125" r=".75" fill="currentColor"/><circle cx="2.75" cy="15.25" r=".75" fill="currentColor"/><circle cx="15.25" cy="2.75" r=".75" fill="currentColor"/><circle cx="15.25" cy="5.875" r=".75" fill="currentColor"/><circle cx="12.125" cy="2.75" r=".75" fill="currentColor"/><circle cx="5.875" cy="2.75" r=".75" fill="currentColor"/><circle cx="5.875" cy="15.25" r=".75" fill="currentColor"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.25 15.25v-6h6m-6 0 6 6"/></g>
    </svg>
  );
}
