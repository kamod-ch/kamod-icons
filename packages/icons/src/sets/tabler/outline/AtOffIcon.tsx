import type { IconProps } from "../../../shared/types";

export function AtOffIcon({
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
      <path d="M9.174 9.17a4 4 0 0 0 5.646 5.668M16 12a4 4 0 0 0-4-4"/><path d="M19.695 15.697A2.5 2.5 0 0 0 21 13.5V12A9 9 0 0 0 7.945 3.953M5.623 5.636A9 9 0 0 0 15.5 20.28M3 3l18 18"/>
    </svg>
  );
}
