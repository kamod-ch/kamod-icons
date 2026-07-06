import type { IconProps } from "../../../shared/types";

export function DoubleCheckIcon({
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
      <path stroke="currentColor" strokeLinecap="round" d="m1.5 12.5 4.076 4.076a.6.6 0 0 0 .848 0L9 14m7-7-4 4"/><path stroke="currentColor" strokeLinecap="round" d="m7 12 4.576 4.576a.6.6 0 0 0 .848 0L22 7"/>
    </svg>
  );
}
