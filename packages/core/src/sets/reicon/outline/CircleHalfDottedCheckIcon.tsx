import type { IconProps } from "../../../shared/types";

export function CircleHalfDottedCheckIcon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 1.75a7.25 7.25 0 0 1 0 14.5"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 9.25 8 11.75l4.25-5.5"/><circle cx="3.873" cy="14.127" r=".75" fill="currentColor"/><circle cx="1.75" cy="9" r=".75" fill="currentColor"/><circle cx="3.873" cy="3.873" r=".75" fill="currentColor"/><circle cx="6.226" cy="15.698" r=".75" fill="currentColor"/><circle cx="2.302" cy="11.774" r=".75" fill="currentColor"/><circle cx="2.302" cy="6.226" r=".75" fill="currentColor"/><circle cx="6.226" cy="2.302" r=".75" fill="currentColor"/></g>
    </svg>
  );
}
