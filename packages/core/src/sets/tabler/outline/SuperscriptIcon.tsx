import type { IconProps } from "../../../shared/types";

export function SuperscriptIcon({
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
      <path d="m5 7 8 10m-8 0 8-10m8 4h-4l3.5-4A1.73 1.73 0 0 0 17 5"/>
    </svg>
  );
}
