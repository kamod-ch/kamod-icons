import type { IconProps } from "../../../shared/types";

export function ScissorsCoupon2Icon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.659 7a2.334 2.334 0 1 0-.002-4.668A2.334 2.334 0 0 0 4.659 7m-1.058-.253L14 12m-9.341 3a2.334 2.334 0 1 0-.002-4.668A2.334 2.334 0 0 0 4.659 15m-1.058-4.413L14 5.333M5.34 18.945a2.65 2.65 0 0 0 2.327 1.388H19a2.666 2.666 0 0 0 2.667-2.666V11A2.666 2.666 0 0 0 19 8.333h-2.404"/>
    </svg>
  );
}
