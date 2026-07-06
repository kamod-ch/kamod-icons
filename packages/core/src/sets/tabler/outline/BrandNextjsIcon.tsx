import type { IconProps } from "../../../shared/types";

export function BrandNextjsIcon({
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
      <path d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9"/>
    </svg>
  );
}
