import type { IconProps } from "../../../shared/types";

export function Rotate3dIcon({
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
      <path d="M12 3a7 7 0 0 1 7 7v4l-3-3m6 0-3 3M8 15.5l-5-3 5-3 5 3V18l-5 3z"/><path d="M3 12.5V18l5 3m0-5.455 5-3.03"/>
    </svg>
  );
}
