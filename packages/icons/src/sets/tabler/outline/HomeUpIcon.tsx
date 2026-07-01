import type { IconProps } from "../../../shared/types";

export function HomeUpIcon({
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
      <path d="M9 21v-6a2 2 0 0 1 2-2h2c.641 0 1.212.302 1.578.771"/><path d="M20.136 11.136 12 3l-9 9h2v7a2 2 0 0 0 2 2h6.344M19 22v-6m3 3-3-3-3 3"/>
    </svg>
  );
}
