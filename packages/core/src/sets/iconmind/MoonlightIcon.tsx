import type { IconProps } from "../../shared/types";

export function MoonlightIcon({
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
      <path d="M14 3a7 7 0 1 0 0 12 5.5 5.5 0 0 1 0-12M8 17l-3 3m8-3v4m4-4 3 3"/>
    </svg>
  );
}
