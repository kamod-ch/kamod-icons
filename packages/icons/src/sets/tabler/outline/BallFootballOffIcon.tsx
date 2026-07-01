import type { IconProps } from "../../../shared/types";

export function BallFootballOffIcon({
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
      <path d="M20.041 16.046A9 9 0 0 0 7.957 3.956M5.634 5.639a9 9 0 0 0 12.726 12.73"/><path d="m12 7 4.755 3.455-.566 1.743-.98 3.014L15 16H9l-1.755-5.545 1.86-1.351 2.313-1.681zm0 0V3m3 13 2.5 3m-.745-8.545L20.5 9M9.061 16.045 6.5 19m.745-8.545L3.5 9M3 3l18 18"/>
    </svg>
  );
}
