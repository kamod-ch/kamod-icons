import type { IconProps } from "../../../shared/types";

export function Rating18PlusIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M10 10.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M10 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M7 15V9m8.5 3h3M17 10.5v3"/>
    </svg>
  );
}
