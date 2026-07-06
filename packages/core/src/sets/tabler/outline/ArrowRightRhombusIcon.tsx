import type { IconProps } from "../../../shared/types";

export function ArrowRightRhombusIcon({
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
      <path d="M8 12h13m-3-3 3 3-3 3M5.5 9.5 3 12l2.5 2.5L8 12z"/>
    </svg>
  );
}
