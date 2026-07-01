import type { IconProps } from "../../../shared/types";

export function PlanetOffIcon({
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
      <path d="M7.042 7.059a7 7 0 0 0 9.908 9.89m1.581-2.425A7 7 0 0 0 9.474 5.47M3 3l18 18"/>
    </svg>
  );
}
