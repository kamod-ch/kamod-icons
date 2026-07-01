import type { IconProps } from "../../../shared/types";

export function MapPinsIcon({
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
      <path d="M10.828 9.828a4 4 0 1 0-5.656 0L8 12.657zM8 7v.01m10.828 10.818a4 4 0 1 0-5.656 0L16 20.657zM16 15v.01"/>
    </svg>
  );
}
