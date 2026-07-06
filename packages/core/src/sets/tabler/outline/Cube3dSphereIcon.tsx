import type { IconProps } from "../../../shared/types";

export function Cube3dSphereIcon({
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
      <path d="m6 17.6-2-1.1V14m0-4V7.5l2-1.1m4-2.3L12 3l2 1.1m4 2.3 2 1.1V10m0 4v2.5l-2 1.12m-4 2.28L12 21l-2-1.1m2-7.9 2-1.1m4-2.3 2-1.1M12 12v2.5m0 4V21m0-9-2-1.12M6 8.6 4 7.5"/>
    </svg>
  );
}
