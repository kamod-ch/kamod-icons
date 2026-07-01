import type { IconProps } from "../../../shared/types";

export function StrokeCurvedIcon({
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
      <path d="M4 19h1.341a7 7 0 0 0 6.845-5.533l.628-2.934A7 7 0 0 1 19.66 5H21"/>
    </svg>
  );
}
