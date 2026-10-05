import type { IconProps } from "../../shared/types";

export function MoveIcon({
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
      <path d="M12 4v16m-8-8h16M9 7l3-3 3 3M9 17l3 3 3-3M7 9l-3 3 3 3m10-6 3 3-3 3"/>
    </svg>
  );
}
