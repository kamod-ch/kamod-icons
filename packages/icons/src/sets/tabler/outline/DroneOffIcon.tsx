import type { IconProps } from "../../../shared/types";

export function DroneOffIcon({
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
      <path d="M14 14h-4v-4m0 0L6.5 6.5m3.457-.55A3.5 3.5 0 0 0 7.04 3.04m-3.02.989A3.5 3.5 0 0 0 6 9.965M14 10l3.5-3.5m.5 3.465A3.5 3.5 0 1 0 14.034 6M14 14l3.5 3.5m-3.465.5a3.5 3.5 0 0 0 5.936 1.98m.987-3.026a3.5 3.5 0 0 0-2.918-2.913M10 14l-3.5 3.5M6 14.035A3.5 3.5 0 1 0 9.966 18M3 3l18 18"/>
    </svg>
  );
}
