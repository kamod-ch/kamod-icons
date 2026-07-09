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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" transform="scale(1.33333)"><circle cx="13.5" cy="6" r="4"/><rect x="4" y="10" rx="1.75" ry="1.75"/><path d="M7.963 7.373a1.25 1.25 0 0 0-.004-1.252L5.33 1.611c-.454-.775-1.705-.775-2.159 0l-2.63 4.51a1.25 1.25 0 0 0-.004 1.252C.76 7.76 1.175 8 1.621 8h5.258c.446 0 .861-.24 1.084-.627Z"/></g>
    </svg>
  );
}
