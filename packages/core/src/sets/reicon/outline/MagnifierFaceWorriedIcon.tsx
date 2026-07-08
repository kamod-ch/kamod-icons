import type { IconProps } from "../../../shared/types";

export function MagnifierFaceWorriedIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-5.482-5.482m-5.185 2.149a7.333 7.333 0 1 0 0-14.667 7.333 7.333 0 0 0 0 14.667"/><path fill="currentColor" strokeWidth="1.333" d="M7.333 10.667a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667Zm6 0a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667Zm-4.555 3.444h3.11c.43 0 .778-.348.778-.778a2.334 2.334 0 0 0-4.666 0c0 .43.348.778.778.778Z"/>
    </svg>
  );
}
