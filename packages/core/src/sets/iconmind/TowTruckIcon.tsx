import type { IconProps } from "../../shared/types";

export function TowTruckIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M2 17V8a2 2 0 0 1 2-2h5v11Zm7-7h4l6-6"/><path d="M21.5 6.5a2.5 2.5 0 0 1-5 0M9 13h13v4H9m-5 2a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M16 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
