import type { IconProps } from "../../../shared/types";

export function MicroscopeIcon({
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
      <path d="M5 21h14M6 18h2m-1 0v3m2-10 3 3 6-6-3-3zm1.5 1.5L9 14m8-11 3 3m-8 15a6 6 0 0 0 3.715-10.712"/>
    </svg>
  );
}
