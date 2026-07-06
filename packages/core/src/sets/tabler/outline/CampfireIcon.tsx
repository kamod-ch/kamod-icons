import type { IconProps } from "../../../shared/types";

export function CampfireIcon({
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
      <path d="m4 21 16-4m0 4L4 17m8-2a4 4 0 0 0 4-4c0-3-2-3-2-8-4 2-6 5-6 8a4 4 0 0 0 4 4"/>
    </svg>
  );
}
