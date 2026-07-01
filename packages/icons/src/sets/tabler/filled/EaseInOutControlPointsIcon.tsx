import type { IconProps } from "../../../shared/types";

export function EaseInOutControlPointsIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M19 17a3 3 0 1 1-2.829 4H15a1 1 0 0 1 0-2h1.17A3 3 0 0 1 19 17M5 1c1.306 0 2.418.835 2.83 2H9a1 1 0 1 1 0 2H7.829A3.001 3.001 0 1 1 5 1m9 2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm-2 16a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm9-16a1 1 0 0 1 0 2c-2.83 0-4.6 1.845-8.152 7.53C8.901 18.845 6.836 21 3 21a1 1 0 0 1 0-2c2.83 0 4.6-1.845 8.152-7.53C15.099 5.155 17.164 3 21 3"/>
    </svg>
  );
}
