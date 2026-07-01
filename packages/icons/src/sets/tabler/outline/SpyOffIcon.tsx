import type { IconProps } from "../../../shared/types";

export function SpyOffIcon({
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
      <path d="M3 11h8m4 0h6M5 11V7c0-.571.16-1.105.437-1.56M8 4h8a3 3 0 0 1 3 3v4M4 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0m10.88-2.123a3 3 0 1 0 4.239 4.247m.59-3.414a3 3 0 0 0-1.425-1.422M10 17h4M3 3l18 18"/>
    </svg>
  );
}
