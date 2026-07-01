import type { IconProps } from "../../../shared/types";

export function PointOffIcon({
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
      <path d="M9.15 9.194a4 4 0 0 0 5.697 5.617M16 12a4 4 0 0 0-4-4M3 3l18 18"/>
    </svg>
  );
}
