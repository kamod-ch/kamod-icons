import type { IconProps } from "../../shared/types";

export function AbsentIcon({
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
      <path d="M6 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M2.4 16a6.6 6.6 0 0 1 13.2 0m.4-2 6 6m0-6-6 6"/>
    </svg>
  );
}
