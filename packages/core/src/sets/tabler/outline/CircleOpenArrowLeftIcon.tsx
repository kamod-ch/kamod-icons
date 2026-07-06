import type { IconProps } from "../../../shared/types";

export function CircleOpenArrowLeftIcon({
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
      <path d="M20.066 8.002A9 9 0 1 0 21 12H8"/><path d="m12 8-4 4 4 4"/>
    </svg>
  );
}
