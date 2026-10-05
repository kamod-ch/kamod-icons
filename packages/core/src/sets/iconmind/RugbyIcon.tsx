import type { IconProps } from "../../shared/types";

export function RugbyIcon({
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
      <path d="M3 12c3-4 6-7 9-7s6 3 9 7c-3 4-6 7-9 7s-6-3-9-7m7-3h4m-4 3h4m-4 3h4"/>
    </svg>
  );
}
