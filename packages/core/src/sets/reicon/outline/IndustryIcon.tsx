import type { IconProps } from "../../../shared/types";

export function IndustryIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.575 6.333h.85c.7 0 1.28.54 1.33 1.239l.809 11.333a1.333 1.333 0 0 1-1.33 1.428H3.766a1.33 1.33 0 0 1-1.329-1.428l.81-11.333a1.333 1.333 0 0 1 1.329-1.239m.757-2.869a2.33 2.33 0 0 1 2-1.13h2.334c.928 0 1.73-.543 2.105-1.329"/><path d="M11.014 11.06 15 7.666v5.666l6.667-5.666V19c0 .736-.598 1.333-1.334 1.333H6.235M17 16h.667m-6 0h.666"/></g>
    </svg>
  );
}
