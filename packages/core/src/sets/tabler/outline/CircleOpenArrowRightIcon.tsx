import type { IconProps } from "../../../shared/types";

export function CircleOpenArrowRightIcon({
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
      <path d="M3.934 8.002A9 9 0 1 1 3 12h13"/><path d="m12 8 4 4-4 4"/>
    </svg>
  );
}
