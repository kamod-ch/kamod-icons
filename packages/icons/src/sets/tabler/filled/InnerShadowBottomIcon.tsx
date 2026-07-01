import type { IconProps } from "../../../shared/types";

export function InnerShadowBottomIcon({
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
      <path d="M5.144 4.72c3.92-3.695 10.093-3.625 13.927.209 3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0-3.905-10.237 0-14.142zm3.32 10.816A1 1 0 1 0 7.05 16.95a7 7 0 0 0 9.9 0 1 1 0 0 0-1.414-1.414 5 5 0 0 1-7.072 0"/>
    </svg>
  );
}
