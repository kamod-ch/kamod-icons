import type { IconProps } from "../../../shared/types";

export function HeadingOffIcon({
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
      <path d="M7 12h5m4 0h1M7 7v12M17 5v8m0 4v2m-2 0h4M15 5h4M5 19h4M3 3l18 18"/>
    </svg>
  );
}
