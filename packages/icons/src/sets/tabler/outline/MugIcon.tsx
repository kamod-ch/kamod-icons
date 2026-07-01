import type { IconProps } from "../../../shared/types";

export function MugIcon({
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
      <path d="M4.083 5h10.834A1.08 1.08 0 0 1 16 6.077v8.615C16 17.072 14.06 19 11.667 19H7.333C4.94 19 3 17.071 3 14.692V6.077A1.08 1.08 0 0 1 4.083 5M16 8h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334C21 13.955 19.88 15 18.5 15H16"/>
    </svg>
  );
}
