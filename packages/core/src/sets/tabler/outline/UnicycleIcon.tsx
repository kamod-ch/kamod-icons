import type { IconProps } from "../../../shared/types";

export function UnicycleIcon({
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
      <path d="M7 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0m5 0V5M8 3q2 2 7 2"/>
    </svg>
  );
}
