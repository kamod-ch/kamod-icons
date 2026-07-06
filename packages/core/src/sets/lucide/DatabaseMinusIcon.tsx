import type { IconProps } from "../../shared/types";

export function DatabaseMinusIcon({
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
      <path d="M21 15V5m1 14h-6M3 12a9 3 0 0 0 18 0"/><path d="M3 5v14a9 3 0 0 0 10.318 2.968"/><ellipse cx="12" cy="5" rx="9" ry="3"/>
    </svg>
  );
}
