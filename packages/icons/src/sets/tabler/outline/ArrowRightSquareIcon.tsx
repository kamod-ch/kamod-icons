import type { IconProps } from "../../../shared/types";

export function ArrowRightSquareIcon({
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
      <path d="M7 12h14m-3 3 3-3-3-3M3 10h4v4H3z"/>
    </svg>
  );
}
