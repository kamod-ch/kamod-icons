import type { IconProps } from "../../../shared/types";

export function MenorahIcon({
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
      <path d="M12 4v16M8 4v2a4 4 0 1 0 8 0V4"/><path d="M4 4v2a8 8 0 1 0 16 0V4M10 20h4"/>
    </svg>
  );
}
