import type { IconProps } from "../../../shared/types";

export function TagsIcon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 4.25h5.586c.265 0 .52.105.707.293L13.65 9.65a2 2 0 0 1 0 2.827l-3.173 3.172a2 2 0 0 1-2.828 0l-5.106-5.106a1 1 0 0 1-.293-.707zm1.5-3h5.586c.265 0 .52.105.707.293l5.77 5.77"/><circle cx="5.75" cy="7.75" r="1.25" fill="currentColor"/></g>
    </svg>
  );
}
