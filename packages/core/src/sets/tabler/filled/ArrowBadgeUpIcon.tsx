import type { IconProps } from "../../../shared/types";

export function ArrowBadgeUpIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m11.375 6.22-5 4A1 1 0 0 0 6 11v6l.006.112a1 1 0 0 0 1.619.669L12 14.28l4.375 3.5A1 1 0 0 0 18 17v-6a1 1 0 0 0-.375-.78l-5-4a1 1 0 0 0-1.25 0"/>
    </svg>
  );
}
