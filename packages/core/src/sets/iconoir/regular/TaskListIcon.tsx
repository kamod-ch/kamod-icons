import type { IconProps } from "../../../shared/types";

export function TaskListIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6h11M3.8 5.8l.8.8 2-2m-2.8 7.2.8.8 2-2m-2.8 7.2.8.8 2-2M9 12h11M9 18h11"/>
    </svg>
  );
}
