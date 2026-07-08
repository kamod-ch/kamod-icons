import type { IconProps } from "../../../shared/types";

export function AtSignIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><ellipse cx="8.875" cy="8.875" rx="2.875" ry="3.125"/><path d="M11.75 5.75v5.183c0 1.554 2.336 1.822 3.572-.279 1.048-1.778.791-4.49-.518-6.274C12.878 1.753 8.425.771 5.191 2.942 2.218 4.938 1.16 8.975 2.802 12.238c1.625 3.229 5.44 4.794 8.893 3.626"/></g>
    </svg>
  );
}
