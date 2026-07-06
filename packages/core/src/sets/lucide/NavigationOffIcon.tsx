import type { IconProps } from "../../shared/types";

export function NavigationOffIcon({
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
      <path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43m1.82-3.84L22 2l-9.73 4.61M2 2l20 20"/>
    </svg>
  );
}
