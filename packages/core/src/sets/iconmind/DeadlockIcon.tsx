import type { IconProps } from "../../shared/types";

export function DeadlockIcon({
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
      <path d="M2 8h4.5m0-2.5L9 8l-2.5 2.5m11 5.5H22m-4.5-2.5L15 16l2.5 2.5"/>
    </svg>
  );
}
