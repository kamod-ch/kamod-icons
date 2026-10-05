import type { IconProps } from "../../shared/types";

export function TextSelectIcon({
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
      <path d="M3 7V4h3m12 0h3v3m0 10v3h-3M6 20H3v-3m3-8h12M6 15h12"/>
    </svg>
  );
}
