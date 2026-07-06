import type { IconProps } from "../../shared/types";

export function BirdhouseIcon({
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
      <path d="M12 18v4m5-4 1.956-11.468M3 8l7.82-5.615a2 2 0 0 1 2.36 0L21 8M4 18h16M7 18 5.044 6.532"/><circle cx="12" cy="10" r="2"/>
    </svg>
  );
}
