import type { IconProps } from "../../shared/types";

export function SchoolRulerIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M2 16 16 2l6 6L8 22Zm3-3 3 3m1-7 3 3m1-7 3 3"/>
    </svg>
  );
}
