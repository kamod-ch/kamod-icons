import type { IconProps } from "../../../shared/types";

export function BonfireIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 14c0 1.61 1.377 2 3.076 2 2.89 0 3.845-1.667 1.922-5-2.691 3-3.076-1.667-2.691-3C10.153 10 9 11.879 9 14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16c3.156 0 5-2.098 5-5.687S12 3 12 3s-5 3.723-5 7.313S8.844 16 12 16"/><path stroke="currentColor" strokeLinecap="round" d="m4.273 21.07 15.454-4.14m-15.454 0L12 19m7.727 2.07-3.863-1.035"/>
    </svg>
  );
}
