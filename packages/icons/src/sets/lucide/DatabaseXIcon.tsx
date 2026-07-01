import type { IconProps } from "../../shared/types";

export function DatabaseXIcon({
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
      <path d="m17 17 5 5m-2.677-8.256A9 3 0 0 0 21 12m0 1.127V5m1 12-5 5M3 12a9 3 0 0 0 10.563 2.954"/><path d="M3 5v14a9 3 0 0 0 10 2.981"/><ellipse cx="12" cy="5" rx="9" ry="3"/>
    </svg>
  );
}
