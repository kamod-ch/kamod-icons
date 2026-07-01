import type { IconProps } from "../../../shared/types";

export function ArrowsMoveHorizontalIcon({
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
      <path d="m18 9 3 3-3 3m-3-3h6M6 9l-3 3 3 3m-3-3h6"/>
    </svg>
  );
}
