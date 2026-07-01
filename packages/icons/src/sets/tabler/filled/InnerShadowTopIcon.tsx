import type { IconProps } from "../../../shared/types";

export function InnerShadowTopIcon({
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
      <path d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142-10.237 3.905-14.142 0-3.905-10.237 0-14.142m12.02 2.121a7 7 0 0 0-9.899 0 1 1 0 0 0 1.414 1.414 5 5 0 0 1 7.072 0A1 1 0 0 0 16.95 7.05z"/>
    </svg>
  );
}
