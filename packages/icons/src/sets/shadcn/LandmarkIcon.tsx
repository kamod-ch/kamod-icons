import type { IconProps } from "../../shared/types";

export function LandmarkIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 22h18M6 18v-7m4 7v-7m4 7v-7m4 7v-7m-6-9 8 5H4z"/>
    </svg>
  );
}
