import type { IconProps } from "../../shared/types";

export function MarsStrokeIcon({
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
      <path d="m14 6 4 4m-1-7h4v4m0-4-7.75 7.75"/><circle cx="9" cy="15" r="6"/>
    </svg>
  );
}
