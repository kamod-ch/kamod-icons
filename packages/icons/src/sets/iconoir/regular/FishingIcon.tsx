import type { IconProps } from "../../../shared/types";

export function FishingIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v10c0 6-10 6-10 0v-4l2 2"/>
    </svg>
  );
}
