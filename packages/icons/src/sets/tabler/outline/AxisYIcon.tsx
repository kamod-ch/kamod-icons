import type { IconProps } from "../../../shared/types";

export function AxisYIcon({
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
      <path d="M11 20h-.01M15 20h-.01M19 20h-.01M4 7l3-3 3 3M7 20V4"/>
    </svg>
  );
}
