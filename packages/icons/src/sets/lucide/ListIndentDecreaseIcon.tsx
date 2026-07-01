import type { IconProps } from "../../shared/types";

export function ListIndentDecreaseIcon({
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
      <path d="M21 5H11m10 7H11m10 7H11M7 8l-4 4 4 4"/>
    </svg>
  );
}
