import type { IconProps } from "../../../shared/types";

export function RoundedMirrorIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 10v4a8 8 0 1 1-16 0v-4a8 8 0 1 1 16 0m-2.5-5.5L13 8m6-1-7.5 6"/>
    </svg>
  );
}
