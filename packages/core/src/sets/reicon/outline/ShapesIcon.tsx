import type { IconProps } from "../../../shared/types";

export function ShapesIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><circle cx="13.5" cy="6" r="3.25"/><rect x="4.75" y="10.75" rx="1" ry="1"/><path d="M3.818 1.99 1.189 6.498a.5.5 0 0 0 .432.752h5.258a.5.5 0 0 0 .432-.752L4.682 1.99a.5.5 0 0 0-.864 0"/></g>
    </svg>
  );
}
