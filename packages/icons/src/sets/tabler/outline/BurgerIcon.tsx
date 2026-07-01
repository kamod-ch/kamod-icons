import type { IconProps } from "../../../shared/types";

export function BurgerIcon({
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
      <path d="M4 15h16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4m8-11c3.783 0 6.953 2.133 7.786 5H4.214C5.047 6.133 8.217 4 12 4m-7 8h14"/>
    </svg>
  );
}
