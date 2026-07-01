import type { IconProps } from "../../../shared/types";

export function SeaAndSunIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3 4.965-3 4.965-3 2.483 3 4.345 3M3 20c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3 4.965-3 4.965-3 2.483 3 4.345 3m-2-10a7 7 0 1 0-14 0"/>
    </svg>
  );
}
