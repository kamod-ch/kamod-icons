import type { IconProps } from "../../../shared/types";

export function EyeglassOffIcon({
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
      <path d="M5.536 5.546 3 14M16 4h2l3 10m-11 2h4m5.426 3.423A3.5 3.5 0 0 1 14 16.5V14m4 0h3v2.5q0 .236-.03.463M10 16.5a3.5 3.5 0 0 1-7 0V14h7zM3 3l18 18"/>
    </svg>
  );
}
