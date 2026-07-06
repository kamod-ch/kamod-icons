import type { IconProps } from "../../shared/types";

export function ListChevronsDownUpIcon({
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
      <path d="M3 5h8m-8 7h8m-8 7h8m4-14 3 3 3-3m-6 14 3-3 3 3"/>
    </svg>
  );
}
