import type { IconProps } from "../../../shared/types";

export function TexIcon({
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
      <path d="M9 8V7H3v1m3 7V7m15 8-5-8m0 8 5-8m-7 4h-4v8h4m-4-4h3"/>
    </svg>
  );
}
