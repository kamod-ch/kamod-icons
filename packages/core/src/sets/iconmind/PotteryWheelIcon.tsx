import type { IconProps } from "../../shared/types";

export function PotteryWheelIcon({
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
      <path d="M9 13c-2-2-1-5 1-7h4c2 2 3 5 1 7Zm-6 3h18m-9 0v4m-5 0h10"/>
    </svg>
  );
}
