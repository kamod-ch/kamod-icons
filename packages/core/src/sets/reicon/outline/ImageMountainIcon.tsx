import type { IconProps } from "../../../shared/types";

export function ImageMountainIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="m16.329 12.658-4.273-5.812a1 1 0 0 0-1.611 0L7.126 11.36 5.682 9.396a1 1 0 0 0-1.611 0l-2.398 3.262a1 1 0 0 0 .806 1.592h13.044a1 1 0 0 0 .806-1.592"/><circle cx="5.5" cy="4" r="1.75"/></g>
    </svg>
  );
}
