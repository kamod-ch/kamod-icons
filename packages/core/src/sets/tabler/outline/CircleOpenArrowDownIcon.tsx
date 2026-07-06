import type { IconProps } from "../../../shared/types";

export function CircleOpenArrowDownIcon({
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
      <path d="M15.998 3.934A9 9 0 1 1 12 3v13"/><path d="m16 12-4 4-4-4"/>
    </svg>
  );
}
