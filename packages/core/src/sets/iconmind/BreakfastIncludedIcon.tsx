import type { IconProps } from "../../shared/types";

export function BreakfastIncludedIcon({
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
      <path d="M6 8v7h8V8Zm8 1a2.5 2.5 0 0 1 0 5M4 18h16M8 3v3m4-3v3"/>
    </svg>
  );
}
