import type { IconProps } from "../../shared/types";

export function SkiLiftIcon({
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
      <path d="m3 4 16 16M7 8v4m-2 0v3h4v-3m6 3v4m-2 0v3h4v-3"/>
    </svg>
  );
}
