import type { IconProps } from "../../../shared/types";

export function MathXDivideY2Icon({
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
      <path d="M3 21 21 3m-6 11 3 4.5m3-4.5-4.5 7M3 4l6 6m-6 0 6-6"/>
    </svg>
  );
}
