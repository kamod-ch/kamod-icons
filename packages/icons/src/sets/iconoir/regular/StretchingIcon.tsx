import type { IconProps } from "../../../shared/types";

export function StretchingIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 20l4.91-.524 2.726-5.238L13.727 9l-4.909 1.048 1.636 2.095m4.364 3.143H17V20"/>
    </svg>
  );
}
