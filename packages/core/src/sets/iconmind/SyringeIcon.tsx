import type { IconProps } from "../../shared/types";

export function SyringeIcon({
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
      <path d="m6 15 8-8 3 3-8 8Zm9.5-6.5L20 4M7.5 16.5 4 20m-1.5-1.5 3 3"/>
    </svg>
  );
}
