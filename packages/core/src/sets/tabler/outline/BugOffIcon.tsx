import type { IconProps } from "../../../shared/types";

export function BugOffIcon({
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
      <path d="M9.884 5.873A3 3 0 0 1 15 8v1m-2 0h3a6 6 0 0 1 1 3v1m-.298 3.705A5 5 0 0 1 7 15v-3a6 6 0 0 1 1-3h1m-6 4h4m10 0h4m-9 7v-6m-8 5 3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4M3 3l18 18"/>
    </svg>
  );
}
