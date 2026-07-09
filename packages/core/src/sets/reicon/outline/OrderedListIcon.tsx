import type { IconProps } from "../../../shared/types";

export function OrderedListIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.333 15.548c.346-1.228 1.536-1.9 2.822-1.881s2.496.594 2.572 1.881-1.287 2.15-2.698 2.725C4.62 18.85 3.448 19.387 3.332 21h5.399m3.936-14h9m-9 10h9M6.333 10V2.667s-.84 1.477-2.622 1.818"/>
    </svg>
  );
}
