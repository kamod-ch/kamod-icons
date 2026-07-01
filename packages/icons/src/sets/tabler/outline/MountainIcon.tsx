import type { IconProps } from "../../../shared/types";

export function MountainIcon({
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
      <path d="M3 20h18L14.079 5.388a2.3 2.3 0 0 0-4.158 0z"/><path d="m7.5 11 2 2.5L12 11l2 3 2.5-2"/>
    </svg>
  );
}
