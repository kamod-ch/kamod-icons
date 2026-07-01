import type { IconProps } from "../../../shared/types";

export function InnerShadowBottomRightIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m6 9a1 1 0 0 0-1 1 5 5 0 0 1-5 5 1 1 0 0 0 0 2 7 7 0 0 0 7-7 1 1 0 0 0-1-1"/>
    </svg>
  );
}
