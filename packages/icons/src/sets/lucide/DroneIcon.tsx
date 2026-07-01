import type { IconProps } from "../../shared/types";

export function DroneIcon({
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
      <path d="M10 10 7 7m3 7-3 3m7-7 3-3m-3 7 3 3M14.205 4.139a4 4 0 1 1 5.439 5.863M19.637 14a4 4 0 1 1-5.432 5.868M4.367 10a4 4 0 1 1 5.438-5.862m-.01 15.724a4 4 0 1 1-5.429-5.873"/><rect x="10" y="8" rx="1"/>
    </svg>
  );
}
