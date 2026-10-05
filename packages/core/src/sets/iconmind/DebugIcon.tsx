import type { IconProps } from "../../shared/types";

export function DebugIcon({
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
      <path d="M7 13a5 5 0 1 0 10 0 5 5 0 1 0-10 0m-4-2h4.5m9 0H21M3 15h4.5m9 0H21M8 5l2.5 2.5M16 5l-2.5 2.5"/>
    </svg>
  );
}
