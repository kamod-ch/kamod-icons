import type { IconProps } from "../../../shared/types";

export function Suitcase3Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="M15.667 7.333a1 1 0 0 1-1-1V3a.333.333 0 0 0-.334-.333H9.667A.333.333 0 0 0 9.333 3v3.333a1 1 0 0 1-2 0V3A2.336 2.336 0 0 1 9.667.667h4.666A2.336 2.336 0 0 1 16.667 3v3.333a1 1 0 0 1-1 1Z"/><path d="M22.667 10.025V9A3.67 3.67 0 0 0 19 5.333H5A3.67 3.67 0 0 0 1.333 9v1.025A22.8 22.8 0 0 0 11 12.616v-.283a1 1 0 0 1 2 0v.283a22.8 22.8 0 0 0 9.667-2.59Z"/><path d="M13 14.616v.717a1 1 0 0 1-2 0v-.717a24.8 24.8 0 0 1-9.667-2.373v5.424A3.67 3.67 0 0 0 5 21.333h14a3.67 3.67 0 0 0 3.667-3.666v-5.424A24.8 24.8 0 0 1 13 14.616Z"/></g>
    </svg>
  );
}
