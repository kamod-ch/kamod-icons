import type { IconProps } from "../../../shared/types";

export function Cube3dSphereOffIcon({
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
      <path d="m6 17.6-2-1.1V14m0-4V7.5l2-1.1m4-2.3L12 3l2 1.1m4 2.3 2 1.1V10m0 4v2m-6 3.9L12 21l-2-1.1m8-11.3 2-1.1M12 12v2.5m0 4V21m0-9-2-1.12M6 8.6 4 7.5M3 3l18 18"/>
    </svg>
  );
}
