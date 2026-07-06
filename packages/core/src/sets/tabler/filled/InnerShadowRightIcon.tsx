import type { IconProps } from "../../../shared/types";

export function InnerShadowRightIcon({
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
      <path d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142-10.237 3.905-14.142 0-3.905-10.237 0-14.142m12.02 2.121a1 1 0 0 0-1.413 1.414 5 5 0 0 1 0 7.072 1 1 0 0 0 1.414 1.414 7 7 0 0 0 0-9.9z"/>
    </svg>
  );
}
