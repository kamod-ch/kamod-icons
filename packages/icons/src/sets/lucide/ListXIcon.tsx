import type { IconProps } from "../../shared/types";

export function ListXIcon({
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
      <path d="M16 5H3m8 7H3m13 7H3m12.5-9.5 5 5m0-5-5 5"/>
    </svg>
  );
}
