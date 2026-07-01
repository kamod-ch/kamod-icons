import type { IconProps } from "../../shared/types";

export function ChevronsLeftRightEllipsisIcon({
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
      <path d="M12 12h.01M16 12h.01M17 7l5 5-5 5M7 7l-5 5 5 5m1-5h.01"/>
    </svg>
  );
}
