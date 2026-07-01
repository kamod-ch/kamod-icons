import type { IconProps } from "../../shared/types";

export function ArrowLeftRightIcon({
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
      <path d="M8 3 4 7l4 4M4 7h16m-4 14 4-4-4-4m4 4H4"/>
    </svg>
  );
}
