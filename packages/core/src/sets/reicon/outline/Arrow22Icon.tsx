import type { IconProps } from "../../../shared/types";

export function Arrow22Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.28 10.45 21 6.73l-3.72-3.72M3 6.73h18M6.72 13.55 3 17.27l3.72 3.72M21 17.27H3"/>
    </svg>
  );
}
