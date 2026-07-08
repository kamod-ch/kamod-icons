import type { IconProps } from "../../../shared/types";

export function Arrow32Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.45 6.72 6.73 3 3.01 6.72M6.73 21V3m6.82 14.28L17.27 21l3.72-3.72M17.27 3v18"/>
    </svg>
  );
}
