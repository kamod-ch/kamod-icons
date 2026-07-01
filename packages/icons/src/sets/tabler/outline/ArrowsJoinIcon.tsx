import type { IconProps } from "../../../shared/types";

export function ArrowsJoinIcon({
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
      <path d="M3 7h5l3.5 5H21M3 17h5l3.495-5"/><path d="m18 15 3-3-3-3"/>
    </svg>
  );
}
