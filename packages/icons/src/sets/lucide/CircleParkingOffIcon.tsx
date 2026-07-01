import type { IconProps } from "../../shared/types";

export function CircleParkingOffIcon({
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
      <path d="M12.656 7H13a3 3 0 0 1 2.984 3.307M13 13H9m10.071 6.071A1 1 0 0 1 4.93 4.93M2 2l20 20"/><path d="M8.357 2.687a10 10 0 0 1 12.956 12.956M9 17V9"/>
    </svg>
  );
}
