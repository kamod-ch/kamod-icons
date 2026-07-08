import type { IconProps } from "../../../shared/types";

export function LaptopMobileIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.667 19.667v-7.334a2 2 0 0 0-2-2h-3.334a2 2 0 0 0-2 2v7.334a2 2 0 0 0 2 2h3.334a2 2 0 0 0 2-2m-19.334-2h8m10-11.334a2.666 2.666 0 0 0-2.666-2.666H6.333a2.666 2.666 0 0 0-2.666 2.666v8.834a2.5 2.5 0 0 0 2.5 2.5"/>
    </svg>
  );
}
