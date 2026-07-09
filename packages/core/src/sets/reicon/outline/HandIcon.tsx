import type { IconProps } from "../../../shared/types";

export function HandIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14.333 11V3.333c0-.92-.752-1.666-1.666-1.666S11 2.413 11 3.333V11m6.667 0V4.333c0-.92-.752-1.666-1.667-1.666s-1.667.746-1.667 1.666V11M11 11V4.333c0-.92-.752-1.666-1.667-1.666s-1.666.746-1.666 1.666v11.738"/><path d="m7.667 14.953-2.358-3.002c-.568-.724-1.62-.847-2.34-.282s-.805 1.508-.281 2.34l3.401 5.232a5.33 5.33 0 0 0 4.472 2.427h5.107a5.334 5.334 0 0 0 5.333-5.333V5.333c0-.92-.752-1.666-1.666-1.666s-1.667.746-1.667 1.666V11"/></g>
    </svg>
  );
}
