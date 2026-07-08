import type { IconProps } from "../../../shared/types";

export function GraduationCapIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m12.61 3.148 8.443 4.347a1.13 1.13 0 0 1 0 2.01l-8.442 4.347a1.33 1.33 0 0 1-1.222 0L2.947 9.505a1.13 1.13 0 0 1 0-2.01l8.442-4.347a1.33 1.33 0 0 1 1.222 0"/><path d="M21.667 8.5a14.9 14.9 0 0 0 0 6.708m-16 .197v3.262c0 1.472 2.836 2.666 6.333 2.666s6.333-1.194 6.333-2.666v-3.262"/></g>
    </svg>
  );
}
