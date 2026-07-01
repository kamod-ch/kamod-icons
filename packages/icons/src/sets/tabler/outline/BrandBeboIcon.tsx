import type { IconProps } from "../../../shared/types";

export function BrandBeboIcon({
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
      <path d="M12 17.5a3.5 3.5 0 0 0 3.5-3.5c0-1.838-1.159-3.002-3.005-3.372-.746-.15-1.37-.745-1.37-1.506 0-1.142.934-2.095 2.058-1.894C16.793 7.873 19 10.286 19 14a7 7 0 1 1-14 0V4.75a1.75 1.75 0 1 1 3.5 0V14a3.5 3.5 0 0 0 3.5 3.5"/>
    </svg>
  );
}
