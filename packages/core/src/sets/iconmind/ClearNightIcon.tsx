import type { IconProps } from "../../shared/types";

export function ClearNightIcon({
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
      <path d="M13 4a8 8 0 1 0 0 16 6.5 6.5 0 0 1 0-16m6 .5L21.5 7 19 9.5 16.5 7Zm0 8 2.5 2.5-2.5 2.5-2.5-2.5Z"/>
    </svg>
  );
}
