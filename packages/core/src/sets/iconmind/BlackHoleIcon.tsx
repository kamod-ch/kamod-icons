import type { IconProps } from "../../shared/types";

export function BlackHoleIcon({
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
      <path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0"/><path d="M2 12a10 2.5 0 1 1 20 0 10 2.5 0 1 1-20 0"/>
    </svg>
  );
}
