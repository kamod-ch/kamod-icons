import type { IconProps } from "../../shared/types";

export function NurseIcon({
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
      <path d="M9 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M5.4 17a6.6 6.6 0 0 1 13.2 0M8 6V3h8v3m-4 8v4m-2-2h4"/>
    </svg>
  );
}
