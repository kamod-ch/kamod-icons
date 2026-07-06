import type { IconProps } from "../../../shared/types";

export function AdjustmentsHorizontalIcon({
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
      <path d="M17 15c1.306 0 2.418.835 2.83 2H20a1 1 0 0 1 0 2h-.171a3.001 3.001 0 0 1-5.658 0H4a1 1 0 0 1 0-2h10.173c.41-1.165 1.52-2 2.827-2M8 9c1.306 0 2.418.835 2.83 2H20a1 1 0 0 1 0 2h-9.171a3.001 3.001 0 0 1-5.658 0H4a1 1 0 0 1 0-2h1.173C5.583 9.835 6.693 9 8 9m6-6c1.306 0 2.418.835 2.83 2H20a1 1 0 0 1 0 2h-3.171a3.001 3.001 0 0 1-5.658 0H4a1 1 0 1 1 0-2h7.173c.41-1.165 1.52-2 2.827-2"/>
    </svg>
  );
}
