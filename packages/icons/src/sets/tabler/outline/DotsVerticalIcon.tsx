import type { IconProps } from "../../../shared/types";

export function DotsVerticalIcon({
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
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
